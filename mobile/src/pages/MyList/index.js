import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Input from "./../../components/Input";
import Header from "./../../components/Header";
import Modal from "./../../components/Modal";

import { OK, Cancel } from "./../../components/ConfirmButtons";

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
  NewListContainer,
  Box,
  Title,
  ConfirmButtons,
} from "./styles";

const NewList = ({ active = false, onClose = () => {} }) => {
  function createList() {
    onClose();
  }

  return (
    active && (
      <Modal>
        <NewListContainer>
          <Box>
            <Title>Nova Lista</Title>
            <Input placeholder="Título da Lista" />
            <ConfirmButtons>
              <OK onPress={createList}>Criar</OK>
              <Cancel onPress={onClose}>Cancelar</Cancel>
            </ConfirmButtons>
          </Box>
        </NewListContainer>
      </Modal>
    )
  );
};

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
