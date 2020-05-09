import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthRoutes from "./auth.routes";
import HomeRoutes from "./home.routes";
import MyListRoutes from "./mylist.routes";
import ProfileRoutes from "./profile.routes";
import SearchRoutes from "./search.routes";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const App = () => (
  <Tabs.Navigator s>
    <Tabs.Screen name="Home" component={HomeRoutes} />
    <Tabs.Screen name="Search" component={SearchRoutes} />
    <Tabs.Screen name="MyList" component={MyListRoutes} />
    <Tabs.Screen name="Profile" component={ProfileRoutes} />
  </Tabs.Navigator>
);

export default function Routes(props) {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Stack.Navigator>
        <Stack.Screen name="Initial" component={AuthRoutes} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
