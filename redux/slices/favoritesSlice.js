import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "FavoritesMovies",
  initialState: {
    total: 0,
  },
  reducers: {
    addFavoritesMovies: (state, action) => {
      state.total ++;
    },
    clearFavoritesMovies: (state, action) => {
        state.total=0;
      },
  },
});

export const { addFavoritesMovies  ,clearFavoritesMovies} = favoritesSlice.actions;

export default favoritesSlice.reducer;
