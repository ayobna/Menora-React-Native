import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addFavoritesMovies } from "../redux/slices/favoritesSlice";
import { useRoute } from "@react-navigation/native";

function MoviesList(props) {
  const { changeMovieDescription, type } = props;
  const route = useRoute();
  const dispatch = useDispatch();
  let movies = [];
  const [favMovie, setFavMovie] = useState(true);
  if (type === "recommendedMovies") {
    movies = useSelector((state) => state.recommendedMovies.movies);
  } else {
    movies = useSelector((state) => state.newMovies.movies);
  }

  const handleFavMovie = () => {
    setFavMovie(!favMovie);
  };
  const changeMovieDesc = (movie) => {
    changeMovieDescription(movie);
    dispatch(addFavoritesMovies());
  };

  const renderItem = (item) => {
    let movie = item.item;
    if (
      movie.Poster !== undefined &&
      movie.Poster !== null &&
      movie.Poster !== "N/A"
    )
      return (
        <View style={{ borderLeftWidth: 15 }}>
          <TouchableOpacity onPress={() => changeMovieDesc(movie)}>
            <View>
              <Image style={styles.image} source={{ uri: movie.Poster }} />
            </View>
          </TouchableOpacity>
          <View style={styles.iconView}>
            <MaterialCommunityIcons
              name="star"
              color={favMovie ? "white" : "yellow"}
              onPress={handleFavMovie}
              size={23}
            />
          </View>
        </View>
      );
  };

  return (
    <View style={styles.moviesListView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movies}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={{ flexGrow: 1 }}
        // refreshing={refresh}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  moviesListView: {
    width: "100%",
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
