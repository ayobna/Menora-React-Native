import { createSlice } from "@reduxjs/toolkit";

const newMoviesSlice = createSlice({
  name: "newMovies",
  initialState: {
    movies: [],
  },
  reducers: {
    setNewMovies: (state, action) => {
      let oldMoviesList = action.payload;
      let newMoviesList = [];
      for (let index = 0; index < oldMoviesList.length; index++) {
        oldMoviesList[index].fav = false;
        let movie = oldMoviesList[index];
        newMoviesList.push(movie);
      }
      state.movies = newMoviesList;
    },
    updateFavMovie: (state, action) => {
      let newMoviesList = state.movies;
      let objIndex = newMoviesList.findIndex(
        (obj) => obj.imdbID == action.payload.imdbID
      );
      newMoviesList[objIndex] = action.payload;      
      state.movies = newMoviesList;
    },
  },
});

export const { setNewMovies, updateFavMovie } = newMoviesSlice.actions;

export default newMoviesSlice.reducer;
