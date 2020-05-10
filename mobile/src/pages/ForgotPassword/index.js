import React from "react";
import { StatusBar } from "react-native";

import { useNavigation } from '@react-navigation/native'

import {
  BackgroundImage,
  Opacity,
  Container,
  LogoImage,
  FormContainer,
  Description,
  Header,
  BackButton
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

import Input from "./../../components/Input";
import Button from "./../../components/Button";

import background from "./../../assets/images/AuthImage.jpg";
import logo from "./../../assets/logo.png";

const ForgotPassword = () => {
  const navigation = useNavigation()

  return (
    <BackgroundImage source={background}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Opacity />
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
        </BackButton>
      </Header>
      <Container>
        <LogoImage source={logo} />

        <Description>Já que esqueceu a senha, vamos te lembrar!</Description>
        <FormContainer>
          <Input placeholder="E-mail" keyboardType="email-address" />
        </FormContainer>

        <Button>Enviar</Button>
      </Container>
    </BackgroundImage>
  );
};

export default ForgotPassword;
