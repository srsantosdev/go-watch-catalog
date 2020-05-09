import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./../pages/Welcome";
import Login from "./../pages/Login";

const Stack = createStackNavigator();

export default function InitialRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={Login} name="Login" />
      {/* <Stack.Screen component={} name="Register" />
      <Stack.Screen component={} name="ForgotPassword" />
      <Stack.Screen component={} name="RecoverPassword" /> */}
    </Stack.Navigator>
  );
}
