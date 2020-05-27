import React from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "./../../components/Header";
import randomColors from "./../../utils/randomColors";

import {
  Container,
  ContainerTotal,
  Total,
  Strong,
  ContainerCards,
  AddListCard,
  AddListCardTitle,
  Card,
  CardTitle,
  CardInvisible,
  ScrollView,
} from "./styles";

const MyList = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#161719" />
      <Header title="Minhas Listas" />

      <ContainerTotal>
        <Total>
          Total de <Strong>10</Strong> Listas
        </Total>
      </ContainerTotal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerCards>
          <AddListCard>
            <Ionicons name="ios-add" size={24} color="#fff" />
            <AddListCardTitle>Criar Lista</AddListCardTitle>
          </AddListCard>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>
          <Card color={randomColors()}>
            <CardTitle>1</CardTitle>
          </Card>

          <CardInvisible />
        </ContainerCards>
      </ScrollView>
    </Container>
  );
};

export default MyList;
