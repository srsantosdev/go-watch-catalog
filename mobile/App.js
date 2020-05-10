import "react-native-gesture-handler";
import React, { useState } from "react";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import Routes from "./src/routes";

const fetchFonts = () => {
  return Font.loadAsync({
    "Roboto-Thin": require("./src/assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return <Routes />;
}
