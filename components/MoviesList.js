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

function MoviesList(props) {
  const { movies, changeMovieDescription } = props;


  const renderItem = (item) => {
    // console.log("item",item)
    return (
      <View style={{ borderLeftWidth: 15 }}>
        <TouchableOpacity onPress={() => changeMovieDescription(item.item)}>
          <View>
            <Image style={styles.image} source={{ uri: item.item.Poster }} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "white",
            maxHeight: 20,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="star" size={23} />
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
});
export default MoviesList;
