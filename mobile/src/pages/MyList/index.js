import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import NewList from "./../../components/NewList";
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
  const navigation = useNavigation();
  const [newListModal, setNewListModal] = useState(false);

  return (
    <>
      <NewList active={newListModal} onClose={() => setNewListModal(false)} />

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
            <AddListCard onPress={() => setNewListModal(true)}>
              <Ionicons name="ios-add" size={24} color="#fff" />
              <AddListCardTitle>Criar Lista</AddListCardTitle>
            </AddListCard>
            <Card
              color={randomColors()}
              onPress={() => navigation.navigate("List")}
            >
              <CardTitle>Testeeeeee</CardTitle>
            </Card>

            <CardInvisible />
          </ContainerCards>
        </ScrollView>
      </Container>
    </>
  );
};

export default MyList;
