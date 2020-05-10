import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: "#fff",
      inactiveTintColor: "#15514E",
      style: {
        position: "absolute",
        backgroundColor: "#29A19C",
        height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        zIndex: 50,
        borderTopWidth: 0, 
      },
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeRoutes}
      options={{
        tabBarLabel: "HOME",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={SearchRoutes}
      options={{
        tabBarLabel: "BUSCAR",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-search" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="MyList"
      component={MyListRoutes}
      options={{
        tabBarLabel: "MINHA LISTA",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-folder-open" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={ProfileRoutes}
      options={{
        tabBarLabel: "PERFIL",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-person" color={color} size={size} />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default function Routes(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Initial" component={AuthRoutes} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
