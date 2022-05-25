import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import MoviesList from "../components/MoviesList";
import MovieDescription from "../components/MovieDescription";
import { Searchbar, Title } from "react-native-paper";
// import { API, API_Key } from "../api/api";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
function MyHomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
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

  const [movieDescription, setMovieDescription] = useState({
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    imdbID: "tt2975590",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  const getData = async () => {
    try {
      const url = "http://www.omdbapi.com/?s=superman&page=1&apikey=baa3c4ad";
      const response = await axios.get(
        "http://www.omdbapi.com/?s=superman&page=1&apikey=baa3c4ad"
      );
      // console.log(response.data);
      console.log("getData")
      setMovies(response.data.Search);
     
    } catch (err) {
      console.log(err);
    }
  };

  const changeMovieDescription=(movieDesc)=>{
    setMovieDescription(movieDesc)
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ marginBottom: 30 }}>
          <View>
            <Searchbar
              style={{}}
              placeholder="Search"
              onChangeText={(query) => setSearchQuery(query)}
              value={searchQuery}
            />
          </View>

          <View style={styles.titleVew}>
            <Title style={styles.text}>Recommended Movies</Title>
          </View>
          <MoviesList movies={movies} changeMovieDescription={changeMovieDescription} />
          <View>
            <View style={styles.titleVew}>
              <Title style={styles.text}>Movie Description</Title>
            </View>

            <View style={styles.movieDescription}>
              <MovieDescription  movieDescription={movieDescription} />
            </View>
          </View>
          <View>
            <View style={styles.titleVew}>
              <Title style={styles.text}>New Movies</Title>
            </View>

            <MoviesList movies={movies} changeMovieDescription={changeMovieDescription}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    // height: "70%",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  titleVew: {
    marginTop: 20,
  },
  movieDescription: {
    height: "30%",
  },
});
export default MyHomeScreen;
