import React from "react";
import { StatusBar } from "react-native";

import {useNavigation} from '@react-navigation/native'

import {
  BackgroundImage,
  Container,
  BoxLogoAndDescription,
  LogoImage,
  Description,
  StartButton,
  Button,
  ButtonDescription,
  Opacity,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

import background from "./../../assets/images/WelcomeImage.jpg";
import logo from "./../../assets/logo.png";

const Welcome = () => {
  const navigation = useNavigation()

  return (
    <BackgroundImage source={background}>
      <StatusBar barStyle="light-content" />
      <Opacity />
      <Container>
        <BoxLogoAndDescription>
          <LogoImage source={logo} />
          <Description>
            Encontre e organize os melhores filmes e series conforme o seu
            gosto.
          </Description>
        </BoxLogoAndDescription>

        <StartButton onPress={() => navigation.navigate("Login")}>
          <Button>
            <Ionicons name="ios-power" color="#fff" size={30} />
          </Button>
          <ButtonDescription>Iniciar</ButtonDescription>
        </StartButton>
      </Container>
    </BackgroundImage>
  );
};

export default Welcome;
