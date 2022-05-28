import { createSlice } from "@reduxjs/toolkit";
import { _storeData } from "../../utils/Functions";
const favoritesSlice = createSlice({
  name: "FavoritesMovies",
  initialState: {
    total: 0,
    movies: [],
  },
  reducers: {
    addFavoritesMovies: (state, action) => {
      let newMoviesList = state.movies;
      let movie = action.payload;
      if (movie.fav === false) {
        newMoviesList = newMoviesList.filter((x) => x.imdbID !== movie.imdbID);
        if (state.total !== 0) {
          state.total--;
        }
      } else {
        state.total++;
        newMoviesList.push(movie);
      }
      _storeData("total", { total: state.total });
      _storeData("movies", { movies: newMoviesList });
      state.movies = newMoviesList;
    },
    clearFavoritesMovies: (state, action) => {
      state.total = 0;
      _storeData("total", { total: 0 });
    },
    setLocalStorageData: (state, action) => {
      state.total = action.payload[1];
      state.movies = action.payload[0];
    },
  },
});

export const {
  addFavoritesMovies,
  clearFavoritesMovies,
  getFavoritesMovies,
  setLocalStorageData,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
