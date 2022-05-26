import { createStackNavigator } from "@react-navigation/stack";
import HomeTab from "./HomeTab";
const Stack = createStackNavigator();

const StackNavigation = () => {
 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        
        component={HomeTab}
        options={{
          title: "My Home",
          headerShown: false,
          // headerTitleStyle: {
          //   color: "white",
          // },

          // headerStyle: {
          //   backgroundColor: "red",
          // },
          // headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
