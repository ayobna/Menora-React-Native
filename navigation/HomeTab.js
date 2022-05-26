import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import FavoritesScreen from "../screens/FavoritesScreen";
import StackHomeScreen from "./StackHomeScreen";
import { useSelector, useDispatch } from "react-redux";
const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
    const   total = useSelector((state) => state.favorites.total);
  return (
    <Tab.Navigator labeled={true} barStyle={{ backgroundColor: "black" }}>
      <Tab.Screen
        name="StackHomeScreen"
        component={StackHomeScreen}
        options={{
          title: "My home",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        tabBarBadge:( total!==0? total: undefined),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
