import React from "react";
import { Ionicons } from "@expo/vector-icons";

// import { Container } from './styles';

const List = () => {
  return (
    <Container>
      <Header>
        <BackButton>
          <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
        </BackButton>
        <TitlePage>Titulo da Pagina</TitlePage>
        <Options />
      </Header>
    </Container>
  );
};

export default List;
