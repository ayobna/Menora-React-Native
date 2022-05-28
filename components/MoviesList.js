import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { addFavoritesMovies } from "../redux/slices/favoritesSlice";
import {
  updateFavMovie as recommendedFav,
  changeMovieDescription,
} from "../redux/slices/recommendedMoviesSlice";
import { updateFavMovie as newMoveFav } from "../redux/slices/newMoviesSlice";
import { useNavigation } from "@react-navigation/native";
import { _getData, _storeData } from "../utils/Functions";
import { useRoute } from "@react-navigation/native";

function MoviesList(props) {
  const {  type } = props;
  const dispatch = useDispatch();
  const total = useSelector((state) => state.favorites.total);

  let movies = [];

  if (type === "recommendedMovies") {
    movies = useSelector((state) => state.recommendedMovies.movies);
    //() =>
  } else {
    movies = useSelector((state) => state.newMovies.movies);
  }
  const handleFavMovie = (movie) => {
    let newMove = {
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type,
      Year: movie.Year,
      fav: !movie.fav,
      imdbID: movie.imdbID,
    };
    if (type === "recommendedMovies") {
      dispatch(recommendedFav(newMove));
    } else {
      dispatch(newMoveFav(newMove));
    }

    dispatch(addFavoritesMovies(newMove));
  };

  useEffect(() => {
    changeMovieDesc(movies[0]);
  }, []);
  const changeMovieDesc = (movie) => {};

  const renderItem = (item) => {
    let movie = item.item;
    if (
      movie.Poster !== undefined &&
      movie.Poster !== null &&
      movie.Poster !== "N/A"
    )
      return (
        <View style={{ borderLeftWidth: 15 }}>
          <TouchableOpacity
            onPress={() => dispatch(changeMovieDescription(movie))}
          >
            <View>
              <Image style={styles.image} source={{ uri: movie.Poster }} />
            </View>
          </TouchableOpacity>
          <View style={styles.iconView}>
            <MaterialCommunityIcons
              name="star"
              color={movie.fav === true ? "yellow" : "white"}
              onPress={() => handleFavMovie(movie)}
              size={23}
            />
          </View>
        </View>
      );
  };

  return (
    <View style={styles.moviesListView}>
      {movies !== undefined && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={movies}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={{ flexGrow: 1 }}
          // refreshing={refresh}
          horizontal
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  moviesListView: {
    width: "100%",
    flex: 1,
  },
  text: {
    color: "white",
  },
  image: {
    backgroundColor: "black",
    width: 130,
    height: 130,
  },
  iconView: {
    backgroundColor: "#191919",
    maxHeight: 20,
    alignItems: "center",
  },
});
export default MoviesList;
