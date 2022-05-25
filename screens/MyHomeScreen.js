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
  const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
    const [movieDescription, setMovieDescription] = useState({
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt2975590",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      await getRecommendedMovies();
      await getNewMovies();
    });
    return unsubscribe;
  }, [navigation]);

  const getRecommendedMovies = async () => {
    try {
      console.log("getData");
      const response = await axios.get(
        "http://www.omdbapi.com/?s=superman&page=1&apikey=baa3c4ad"
      );
      // console.log(response.data);
      console.log("getRecommendedMovies");
      setMovies(response.data.Search);
    } catch (err) {
      console.log(err);
    }
  };
  const getNewMovies = async () => {
    try {
      console.log("getData");
      const response = await axios.get(
        "https://www.omdbapi.com/?s=super&apikey=baa3c4ad&type=movie&y=2022"
      );
      // console.log(response.data);
      console.log("getNewMovies");
      setNewMovies(response.data.Search);
    } catch (err) {
      console.log(err);
    }
  };
  const changeMovieDescription = (movieDesc) => {
    setMovieDescription(movieDesc);
  };

  const searchMovies = async () => {
    try {
      console.log("getData");
      const response = await axios.get(
        `http://www.omdbapi.com/?s=` + searchQuery + `&page=1&apikey=baa3c4ad`
      );
      if (response.Response && response.totalResults > 5) {
        setMovies(response.data.Search);
      }
    } catch (err) {
      console.log(err);
    }
  };
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
              onIconPress={searchMovies}
            />
          </View>

          <View style={styles.titleVew}>
            <Title style={styles.text}>Recommended Movies</Title>
          </View>
          <MoviesList
            movies={movies}
            changeMovieDescription={changeMovieDescription}
          />
          <View>
            <View style={styles.titleVew}>
              <Title style={styles.text}>Movie Description</Title>
            </View>

            <View style={styles.movieDescription}>
              <MovieDescription movieDescription={movieDescription} />
            </View>
          </View>
          <View>
            <View style={styles.titleVew}>
              <Title style={styles.text}>New Movies</Title>
            </View>

            <MoviesList
              movies={newMovies}
              changeMovieDescription={changeMovieDescription}
            />
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
