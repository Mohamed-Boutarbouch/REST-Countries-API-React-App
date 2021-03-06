import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';

const initialState = {
  countries: [],
  allRegions: [],
  filterByRegion: [],
  detailOnBorders: [],
  searchInput: '',
  filterRegionText: 'Filter by Region',
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(URL);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchInputHandler(state, { payload }) {
      state.searchInput = payload;
    },

    filterRegion(state, { payload }) {
      const filterOptions = current(state).countries.filter((country) => {
        if (payload === 'All Regions') return current(state).countries;
        return country.region === payload;
      });
      state.filterByRegion = filterOptions;

      state.filterRegionText = payload;
    },

    getBorderDetails(state, { payload }) {
      state.detailOnClick = payload;

      const borderDetails = (allCountries) => {
        if (!payload) return;
        const extractBorderDetails = allCountries.filter((country) =>
          payload.some((border) => border === country.cca3),
        );
        return extractBorderDetails;
      };

      state.detailOnBorders = borderDetails(current(state).countries);
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      const sortedPayload = payload.sort((a, b) => a.name.common.localeCompare(b.name.common));

      state.countries = sortedPayload;
      state.filterByRegion = sortedPayload;
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

export const { filterRegion, searchInputHandler, getBorderDetails } = countriesSlice.actions;
export const selectAllCountriesState = (state) => state.countries;
export default countriesSlice.reducer;
