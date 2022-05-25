import { createSlice } from "@reduxjs/toolkit";

const newMoviesSlice = createSlice({
  name: "newMovies",
  initialState: {
    movies: [],
  },
  reducers: {
    setNewMovies: (state, action) => {
      
      state.movies = action.payload;
    },
  },
});

export const { setNewMovies } = newMoviesSlice.actions;

export default newMoviesSlice.reducer;
