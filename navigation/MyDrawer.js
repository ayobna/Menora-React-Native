import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
import { _getData, _storeData } from "../utils/Functions";
import { useSelector, useDispatch } from "react-redux";
import { setLocalStorageData } from "../redux/slices/favoritesSlice";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getData();
 
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
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
