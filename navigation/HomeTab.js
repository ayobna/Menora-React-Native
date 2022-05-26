import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoritesScreen from '../screens/FavoritesScreen';
import StackHomeScreen from './StackHomeScreen';

const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator labeled={true} barStyle={{ backgroundColor: 'black' }}        >
            <Tab.Screen name="StackHomeScreen" component={StackHomeScreen} options={{
                title: "My home",
                
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen}  options={ {
                
                title: "Favorites",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="star" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default HomeTab;