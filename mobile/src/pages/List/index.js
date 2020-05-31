import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Options from "./../../components/Options";
import { Container, Header, BackButton, TitlePage } from "./styles";

const List = () => {
  const navigation = useNavigation();

  const options = [
    { name: "Editar Lista", task: () => {} },
    { name: "Excluir Lista", task: () => {} },
  ];

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
        </BackButton>
        <TitlePage>Edredom</TitlePage>
        <Options options={options} />
      </Header>
    </Container>
  );
};

export default List;
