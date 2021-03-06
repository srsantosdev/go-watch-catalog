import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  BackgroundImage,
  Opacity,
  Container,
  LogoImage,
  FormContainer,
  ForgotPasswordButton,
  RegisterButton,
  TextButton,
  TextForgotPassword,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

import Input from "./../../components/Input";
import Button from "./../../components/Button";

import background from "./../../assets/images/AuthImage.jpg";
import logo from "./../../assets/logo.png";

const Login = () => {
  const navigation = useNavigation();

  return (
    <BackgroundImage source={background}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Opacity />
      <Container>
        <LogoImage source={logo} />
        <FormContainer>
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" secureTextEntry />
        </FormContainer>
        <ForgotPasswordButton
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <TextForgotPassword>Esqueceu a senha?</TextForgotPassword>
        </ForgotPasswordButton>

        <Button onPress={() => navigation.navigate("App")}>Entrar</Button>

        <RegisterButton onPress={() => navigation.navigate("Register")}>
          <Ionicons name="ios-log-in" size={20} color="#fff" />
          <TextButton>Não tenho cadastro</TextButton>
        </RegisterButton>
      </Container>
    </BackgroundImage>
  );
};

export default Login;
