import { Button } from "react-native-paper";
import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Card } from "react-native-paper";

function MovieDescription(props) {
const {movieDescription}=props

  return (
    <Card style={{borderWidth:10}} >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          // height: "100%",
          backgroundColor: "black",
        }}
      >
        <View
          style={{
            width: "45%",
          //  borderWidth: 1,
            height: "100%",
            borderColor: "white",
            backgroundColor:'black'
          }}
        >
          <Card.Cover style={{width:"90%",backgroundColor:'black'}} source={{ uri: movieDescription.Poster }} />
        </View>
        <View
          style={{
            width: "44%",
            height: "100%",
         //   borderWidth: 1,
            borderColor: "white",
            justifyContent: "space-evenly",
            backgroundColor: "#191919",
          }}
        >
          <View style={{ alignItems: "center"}}>
            <Text style={{ color: "white", fontSize: 16 }}>
           { movieDescription.Title}
            </Text>
          </View>
          <View style={{ alignItems: "flex-start", marginLeft: 5 }}>
            <View>
              <Text style={{ color: "white" }}>Year: {movieDescription.Year}</Text>
            </View>
            <View>
              <Text style={{ color: "white" }}>imdbID: {movieDescription.imdbID}</Text>
            </View>
            <View>
              <Text style={{ color: "white" }}>Type: {movieDescription.Type}</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({});
export default MovieDescription;
