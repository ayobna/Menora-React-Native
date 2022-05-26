import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MovieDescription from "../components/MovieDescription";
import { Title } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { clearFavoritesMovies } from "../redux/slices/favoritesSlice";
function FavoritesScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([
    {
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt2975590",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Superman Returns",
      Year: "2006",
      imdbID: "tt0348150",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      Title: "Superman",
      Year: "1978",
      imdbID: "tt0078346",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      Title: "Superman II",
      Year: "1980",
      imdbID: "tt0081573",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      Title: "Superman III",
      Year: "1983",
      imdbID: "tt0086393",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
      Title: "Superman IV: The Quest for Peace",
      Year: "1987",
      imdbID: "tt0094074",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    },
    {
      Title: "Batman v Superman: Dawn of Justice Ultimate Edition",
      Year: "2016",
      imdbID: "tt18689424",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzgyMTMzZjUtNGNjMy00NTJjLWIzNDYtMTc2YzQwOGE5MGM4XkEyXkFqcGdeQXVyMTUwODYzMjcw._V1_SX300.jpg",
    },
    {
      Title: "Superman & Lois",
      Year: "2021–",
      imdbID: "tt11192306",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGYyMmViMjgtZjViZi00NjkzLThjZGItMzZhYmZmOWZlMzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Superman/Batman: Apocalypse",
      Year: "2010",
      imdbID: "tt1673430",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lois & Clark: The New Adventures of Superman",
      Year: "1993–1997",
      imdbID: "tt0106057",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
    },
  ]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(clearFavoritesMovies());
    });
    return unsubscribe;
  }, [navigation]);
  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <View style={{flex:1,justifyContent:'center'}}>
          <Title style={styles.text}>{item.Title}</Title>
        </View>

        <View>
          <MovieDescription movieDescription={item} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.flatListView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={movies}
          renderItem={(item) => renderItem(item.item)}
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={{ flexGrow: 1 }}
          // refreshing={refresh}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 16,
    left: 10,
  },
  flatListView: {
    top: 15,
  },
  itemContainer: {

    height: "10%",
    width: "100%",
  },
});
export default FavoritesScreen;
