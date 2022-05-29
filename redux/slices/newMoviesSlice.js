import { createSlice } from "@reduxjs/toolkit";

const newMoviesSlice = createSlice({
  name: "newMovies",
  initialState: {
    movies: [],
  },
  reducers: {
    setNewMovies: (state, action) => {
      let oldMoviesList = action.payload.movies;
      let newMoviesList = [];
      let favMovies = action.payload.favoritesMovies;
      for (let index = 0; index < oldMoviesList.length; index++) {
        let movie = oldMoviesList[index];
        movie.fav = false;
        if (favMovies !== undefined) {
          let indexOf = favMovies.findIndex(
            (item) => item.imdbID === movie.imdbID
          );
          if (indexOf !== -1) {
            movie.fav = true;
          }
        }
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
    }
  },
});

export const { setNewMovies, updateFavMovie, updateFavoriteMovies } =
  newMoviesSlice.actions;

export default newMoviesSlice.reducer;
