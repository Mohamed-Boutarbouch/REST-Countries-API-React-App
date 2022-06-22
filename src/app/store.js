import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countriesSlice';

const store = configureStore({
  reducer: countriesReducer,
});

export default store;
