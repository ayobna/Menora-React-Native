import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
