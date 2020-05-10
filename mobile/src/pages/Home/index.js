import React from "react";
import { StatusBar, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import randomColors from "./../../utils/randomColors";

import {
  Container,
  Header,
  HeaderTitle,
  ContainerIcons,
  UserImage,
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
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#161719" />
      <Header>
        <HeaderTitle>Olá, Kamila!</HeaderTitle>
        <ContainerIcons>
          <TouchableOpacity>
            <Ionicons name="ios-notifications-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <UserImage />
        </ContainerIcons>
      </Header>

      <Title>Minhas Listas</Title>

      <Box>
        <ContainerCards
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <AddListCard>
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
  );
};

export default Home;
