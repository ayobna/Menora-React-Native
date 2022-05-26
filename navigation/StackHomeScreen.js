import { createStackNavigator } from "@react-navigation/stack";
import MyHomeScreen from "../screens/MyHomeScreen";
const Stack = createStackNavigator();

const StackHomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyHomeScreen" component={MyHomeScreen} />
    </Stack.Navigator>
  );
};

export default StackHomeScreen;
