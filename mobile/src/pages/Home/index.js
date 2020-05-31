import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import randomColors from "./../../utils/randomColors";
import Header from "./../../components/Header";
import NewList from './../../components/NewList'
import {
  Container,
  Title,
  ContainerCards,
  AddListCard,
  AddListCardTitle,
  Card,
  CardTitle,
  MoviesAndSeriesContainer,
  SubTitle,
  ContainerItems,
  CardItems,
  ImageMovie,
  Box,
} from "./styles";

const Home = () => {
  const navigation = useNavigation();
  const [newListModal, setNewListModal] = useState(false);

  return (
    <>
      <NewList active={newListModal} onClose={() => setNewListModal(false)} />

      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#161719" />
        <Header title="Olá, Kamila!" />

        <Title>Minhas Listas</Title>

        <Box>
          <ContainerCards
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <AddListCard onPress={() => setNewListModal(true)}>
              <Ionicons name="ios-add" size={24} color="#fff" />
              <AddListCardTitle>Criar Lista</AddListCardTitle>
            </AddListCard>
            <Card color={randomColors()}>
              <CardTitle>Investigações</CardTitle>
            </Card>
            <Card color={randomColors()}>
              <CardTitle>Cracudos</CardTitle>
            </Card>
            <Card color={randomColors()}>
              <CardTitle>Investigações</CardTitle>
            </Card>
            <Card color={randomColors()}>
              <CardTitle>Cracudos</CardTitle>
            </Card>
          </ContainerCards>
        </Box>

        <Title>Sugestões da semana</Title>

        <MoviesAndSeriesContainer>
          <SubTitle>Filmes</SubTitle>
          <ContainerItems
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <CardItems onPress={() => navigation.navigate("Detail")}>
              <ImageMovie />
            </CardItems>
            <CardItems>
              <ImageMovie />
            </CardItems>
            <CardItems>
              <ImageMovie />
            </CardItems>
            <CardItems>
              <ImageMovie />
            </CardItems>
          </ContainerItems>

          <SubTitle>Séries</SubTitle>
          <ContainerItems
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <CardItems>
              <ImageMovie />
            </CardItems>
            <CardItems>
              <ImageMovie />
            </CardItems>
            <CardItems>
              <ImageMovie />
            </CardItems>
            <CardItems>
              <ImageMovie />
            </CardItems>
          </ContainerItems>
        </MoviesAndSeriesContainer>
      </Container>
    </>
  );
};

export default Home;
