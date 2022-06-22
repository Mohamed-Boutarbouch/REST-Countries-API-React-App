/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const URL = 'https://restcountries.com/v3.1/all';
// const URL = 'https://restcountries.com/v3.1/currency/dollar';
const URL = 'https://restcountries.com/v3.1/name/united';

const initialState = {
  countries: [],
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
    gg(state, { payload }) {},
  },

  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      // Add user to the state array
      // state.entities.push(action.payload);
      state.countries = payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchCountries.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { gg } = countriesSlice.actions;
export const selectAllCountriesState = (state) => state.countries;
export default countriesSlice.reducer;
