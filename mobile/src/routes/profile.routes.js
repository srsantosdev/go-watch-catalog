import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Profile from "./../pages/Profile";
import EditData from "./../pages/EditData";
import Settings from "./../pages/Settings";
import ChangePassword from "./../pages/ChangePassoword";

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditData" component={EditData} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}
