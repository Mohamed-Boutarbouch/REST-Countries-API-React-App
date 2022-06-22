import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countriesSlice';
import themeReducer from '../features/themeSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    theme: themeReducer,
  },
});

export default store;
