import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MyList from "./../pages/MyList";
import List from "./../pages/List";

const Stack = createStackNavigator();

export default function MyListRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyList" component={MyList} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}
