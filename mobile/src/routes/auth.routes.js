import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./../pages/Welcome";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import ForgotPassword from "./../pages/ForgotPassword";
import RecoverPassword from "./../pages/RecoverPassword";

const Stack = createStackNavigator();

export default function InitialRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
      <Stack.Screen component={RecoverPassword} name="RecoverPassword" />
    </Stack.Navigator>
  );
}
