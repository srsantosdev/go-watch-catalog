import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "./../pages/Home";
import Detail from "./../pages/Detail";

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
