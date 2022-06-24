/* eslint-disable implicit-arrow-linebreak */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import countriesReducer from '../features/countriesSlice';
import themeReducer from '../features/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['countries'],
};

const rootReducer = combineReducers({
  countries: countriesReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
