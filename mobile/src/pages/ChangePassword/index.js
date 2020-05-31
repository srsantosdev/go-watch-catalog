import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "./../../components/Button";
import Input from "./../../components/Input";
import {
  Container,
  Header,
  BackButton,
  TitlePage,
  Invisible,
  Inputs,
} from "./styles";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
        </BackButton>
        <TitlePage>Alterar Senha</TitlePage>

        <Invisible />
      </Header>

      <Inputs>
        <Input placeholder="Senha Atual" secureTextEntry />
        <Input placeholder="Nova Senha" secureTextEntry />
        <Input placeholder="Confirmar Senha" secureTextEntry />
      </Inputs>

      <Button>Alterar</Button>
    </Container>
  );
};

export default ChangePassword;
