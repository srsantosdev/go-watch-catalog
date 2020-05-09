import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Search from './../pages/Search'

const Stack = createStackNavigator();

export default function SearchRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}