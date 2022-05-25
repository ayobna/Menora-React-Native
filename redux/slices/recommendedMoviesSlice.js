import { createSlice } from "@reduxjs/toolkit";

const recommendedMoviesSlice = createSlice({
  name: "recommendedMovies",
  initialState: {
    movies: [],
  },
  reducers: {
    setMoviesRecommendedMovies: (state, action) => {
      
      state.movies = action.payload;
    },
  },
});

export const { setMoviesRecommendedMovies } = recommendedMoviesSlice.actions;

export default recommendedMoviesSlice.reducer;
  