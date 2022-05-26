import { configureStore } from "@reduxjs/toolkit";
import recommendedMoviesSlice from "./slices/recommendedMoviesSlice";
import newMoviesSlice from "./slices/newMoviesSlice";
import favoritesSlice from "./slices/favoritesSlice";
const store = configureStore({
  reducer: {
    recommendedMovies: recommendedMoviesSlice,
    newMovies: newMoviesSlice,
    favorites: favoritesSlice,
  },
});

export default store;
