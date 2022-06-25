/* eslint-disable implicit-arrow-linebreak */
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import countriesReducer from '../features/countriesSlice';
import themeReducer from '../features/themeSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['countries'],
};

const countriesPersistConfig = {
  key: 'countries',
  storage,
  whitelist: ['detailOnBorders'],
};

const rootReducer = combineReducers({
  countries: persistReducer(countriesPersistConfig, countriesReducer),
  theme: themeReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

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
