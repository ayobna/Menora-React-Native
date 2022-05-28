import { createSlice } from "@reduxjs/toolkit";

const recommendedMoviesSlice = createSlice({
  name: "recommendedMovies",
  initialState: {
    movies: [],
    firstMovies: {},
  },
  reducers: {
    setMoviesRecommendedMovies: (state, action) => {
      let oldMoviesList = action.payload;
      let newMoviesList = [];
      for (let index = 0; index < oldMoviesList.length; index++) {
        oldMoviesList[index].fav = false;
        let movie = oldMoviesList[index];
        newMoviesList.push(movie);
      }

      state.firstMovies = newMoviesList[0];
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
    changeMovieDescription: (state, action) => {
      state.firstMovies = action.payload;
    },
  },
});

export const {
  setMoviesRecommendedMovies,
  updateFavMovie,
  changeMovieDescription,
} = recommendedMoviesSlice.actions;

export default recommendedMoviesSlice.reducer;
