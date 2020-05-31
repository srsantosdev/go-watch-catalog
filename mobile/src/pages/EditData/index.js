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

const EditData = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
        </BackButton>
        <TitlePage>Editar Dados</TitlePage>

        <Invisible />
      </Header>

      <Inputs>
        <Input placeholder="Nome Completo" />
        <Input placeholder="Usuário" />
        <Input placeholder="E-mail" />
      </Inputs>

      <Button>Confirmar</Button>
    </Container>
  );
};

export default EditData;
