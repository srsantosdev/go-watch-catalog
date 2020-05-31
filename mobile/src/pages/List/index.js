import React, { useState } from "react";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Options from "./../../components/Options";
import {
  Container,
  Header,
  BackButton,
  TitlePage,
  Title,
  Box,
  Item,
  Duration,
  FavoriteContainer,
  DurationTitle,
  DurationValue,
  EmptyListContainer,
  TitleEmpty,
  Message,
  Illustration,
} from "./styles";

import illustration from "./../../assets/RoboListaVazia.png";

const Favorite = () => {
  const [active, setActive] = useState();

  return (
    <FavoriteContainer onPress={() => setActive(!active)}>
      <Ionicons
        name={active ? "ios-heart" : "ios-heart-empty"}
        size={30}
        color="#29a19c"
      />
    </FavoriteContainer>
  );
};

const EmptyList = () => {
  return (
    <EmptyListContainer>
      <Illustration source={illustration} />
      <TitleEmpty>Ah, não!</TitleEmpty>
      <Message>Nada foi adicionado aqui.</Message>
    </EmptyListContainer>
  );
};

const List = () => {
  const navigation = useNavigation();
  const options = [
    { name: "Editar Lista", task: () => {} },
    { name: "Excluir Lista", task: () => {} },
  ];

  const [data, setData] = useState([]);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
        </BackButton>
        <TitlePage>Edredom</TitlePage>
        <Options options={options} />
      </Header>

      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item>
              <Box>
                <Title>Titulo do filme</Title>
                <Duration>
                  <DurationTitle>Duração: </DurationTitle>
                  <DurationValue>1h 33m</DurationValue>
                </Duration>
              </Box>
              <Favorite />
            </Item>
          )}
        />
      ) : (
        <EmptyList />
      )}
    </Container>
  );
};

export default List;
