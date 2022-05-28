import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MovieDescription from "../components/MovieDescription";
import { Button, Title } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  clearFavoritesMovies,
  getFavoritesMovies,
} from "../redux/slices/favoritesSlice";
import { _removeData } from "../utils/Functions";
function FavoritesScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //const [movies, setMovies] = useState();
  const movies = useSelector((state) => state.favorites.movies);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(clearFavoritesMovies());
      // dispatch(getFavoritesMovies());
    });
    return unsubscribe;
  }, [navigation]);

  const remove=()=>{
    _removeData("movies")
  }
  const renderItem = (item) => {
    return (
      <View>
        <View style={{ flex: 1, justifyContent: "center" }}>
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
      <Button onPress={remove}>remove data</Button>
        {movies && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={movies}
            renderItem={(item) => renderItem(item.item)}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={{ flexGrow: 1 }}
            // refreshing={refresh}
          />
        )}
          
      </View>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  flex: 1,

  },
  text: {
    color: "white",
    fontSize: 16,
    left: 10,
  },
  flatListView: {
    top: 15,
    flex: 1,
  },
});
export default FavoritesScreen;
