/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';
// const URL = 'https://restcountries.com/v3.1/currency/dollar';
// const URL = 'https://restcountries.com/v3.1/name/united';

const initialState = {
  countries: [],
  allRegions: [],
  filterByRegion: [],
  searchInput: '',
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  try {
    const { data } = await axios(URL);
    return data;
  } catch (error) {
    return console.log(error.massage);
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchInputHandler(state, { payload }) {
      state.searchInput = payload;
    },

    filterRegion(state, { payload }) {
      const filterOptions = current(state)
        .allRegions.filter((region) => region === payload)
        .toString();

      if (payload === filterOptions) {
        const specificRegion = current(state).countries.filter(
          (country) => country.region === payload,
        );
        state.filterByRegion = specificRegion;
      } else {
        state.filterByRegion = state.countries;
      }
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
      state.filterByRegion = payload;
      state.allRegions = ['All Regions', ...new Set(payload.map((country) => country.region))];
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchCountries.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { filterRegion, searchInputHandler } = countriesSlice.actions;
export const selectAllCountriesState = (state) => state.countries;
export default countriesSlice.reducer;
