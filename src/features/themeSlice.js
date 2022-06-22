/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state) {
      if (state.isDark === false) {
        state.isDark = true;
      } else if (state.isDark) {
        state.isDark = false;
      }
    },
  },
});

export const selectThemeState = (state) => state.theme;
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
