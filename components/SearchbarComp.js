import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Searchbar } from "react-native-paper";

function SearchbarComp(props) {
  const { searchMovies } = props;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <Searchbar
        style={{ backgroundColor: "#191919" }}
        iconColor="white"
        selectionColor="white"
        theme={{ colors: { text: "white" } }}
        placeholderTextColor="gray"
        placeholder="Search"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        onIconPress={()=>searchMovies(searchQuery)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
export default SearchbarComp;
