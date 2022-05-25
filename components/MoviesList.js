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
  const { movies } = props;



  const renderItem = (item) => {
    console.log("item",item)
    return (
      <View style={{ borderLeftWidth: 15 }}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: item.item.Poster}}
          />
        </View>
        <View style={{ backgroundColor: "#020", maxHeight: 20 }}>
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
    width: 120,
    height: 120,
  },
});
export default MoviesList;
