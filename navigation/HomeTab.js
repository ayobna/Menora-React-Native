import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyHomeScreen from '../screens/MyHomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator labeled={true} barStyle={{ backgroundColor: 'black' }}        >
            <Tab.Screen name="HomeScreen" component={MyHomeScreen} options={{
                title: "HomeScreen",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
                title: "Search",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="star" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default HomeTab;