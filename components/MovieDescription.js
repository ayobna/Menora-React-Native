import { Button } from "react-native-paper";
import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Card } from "react-native-paper";

function MovieDescription(props) {
  const { movieDescription } = props;

  return (
    <Card style={styles.card}>
      {movieDescription !== undefined && (
        <View style={styles.container}>
          <View style={styles.coverView}>
            <Card.Cover
              style={styles.cover}
              source={{ uri: movieDescription.Poster }}
            />
          </View>
          <View style={styles.descView}>
            <View style={styles.titleView}>
              <Text style={{ color: "white", fontSize: 16 }}>
                {movieDescription.Title}
              </Text>
            </View>

            <View style={styles.moreDesc}>
              <View>
                <Text style={styles.text}>Year: {movieDescription.Year}</Text>
              </View>
              <View>
                <Text style={styles.text}>
                  imdbID: {movieDescription.imdbID}
                </Text>
              </View>
              <View>
                <Text style={styles.text}>Type: {movieDescription.Type}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 10,
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "black",
  },
  coverView: {
    width: "45%",
    height: "100%",
    backgroundColor: "black",
  },
  cover: {
    width: "90%",
    backgroundColor: "black",
  },
  descView: {
    width: "44%",
    //height: "100%",
    backgroundColor: "#191919",
  },
  titleView: {
    alignItems: "center",
    flex: 0.2,
  },
  moreDesc: {
    flex: 0.7,
    justifyContent: "space-evenly",
    left: 5,
  },
  text: {
    color: "white",
  },
});
export default MovieDescription;
