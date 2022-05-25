import { configureStore } from "@reduxjs/toolkit";
import recommendedMoviesSlice from "./slices/recommendedMoviesSlice";
import newMoviesSlice from "./slices/newMoviesSlice";
const store = configureStore({
  reducer: {
    recommendedMovies: recommendedMoviesSlice,
    newMovies: newMoviesSlice,
  },
});

export default store;
