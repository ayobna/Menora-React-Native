import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import MoviesList from "../components/MoviesList";
import MovieDescription from "../components/MovieDescription";
import { Searchbar, Title } from "react-native-paper";
// import { API, API_Key } from "../api/api";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setMoviesRecommendedMovies } from "../redux/slices/recommendedMoviesSlice";
import { setNewMovies } from "../redux/slices/newMoviesSlice";
import SearchbarComp from "../components/SearchbarComp";
import { setLocalStorageData } from "../redux/slices/favoritesSlice";
import { _getData, _storeData } from "../utils/Functions";
function MyHomeScreen() {
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.recommendedMovies.firstMovies);

  useEffect(() => {
    getData();
    getRecommendedMovies();
    getNewMovies();
  }, []);

  const getData = async () => {
    let dataTotal = await _getData("total");
    let dataMovies = await _getData("movies");
    let total = 0;
    let movies = [];
    if (dataMovies != null) {
      movies = dataMovies.movies;
    }
    if (dataTotal != null) {
      total = dataTotal.total;
    }
    let data = [movies, dataTotal.total];
    dispatch(setLocalStorageData(data));
  };
  const getRecommendedMovies = async () => {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?s=superman&page=1&apikey=baa3c4ad"
      );
      if (response.data.Response && response.data.totalResults > 5) {
        dispatch(setMoviesRecommendedMovies(response.data.Search));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getNewMovies = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?s=super&apikey=baa3c4ad&type=movie&y=2022"
      );
      if (response.data.Response && response.data.totalResults > 5) {
        dispatch(setNewMovies(response.data.Search));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const searchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=` + searchQuery + `&page=1&apikey=baa3c4ad`
      );
      if (response.data.Response && response.data.totalResults > 5) {
        console.log("Successful search");
        dispatch(setMoviesRecommendedMovies(response.data.Search));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewContainer}>
          <View>
            <SearchbarComp searchMovies={searchMovies} />
          </View>

          <View style={styles.titleVew}>
            <Title style={styles.text}>Recommended Movies</Title>
          </View>
          <View>
            <MoviesList type="recommendedMovies" />
          </View>
          <View>
            <View style={styles.titleVew}>
              <Title style={styles.text}>Movie Description</Title>
            </View>

            <View style={styles.movieDescription}>
              <MovieDescription movieDescription={movie} />
            </View>
          </View>
          <View>
            <View style={styles.titleVew}>
              <Title style={styles.text}>New Movies</Title>
            </View>

            <MoviesList type="newMovies" />
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
  scrollViewContainer: {
    marginBottom: 30,
  },
  text: {
    color: "white",
    fontSize: 16,
    left: 10,
  },
  titleVew: {
    marginTop: 20,
  },
  movieDescription: {
    height: "30%",
  },
});
export default MyHomeScreen;
