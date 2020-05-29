import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Input from "./../../components/Input";
import Header from "./../../components/Header";
import Modal from "./../../components/Modal";

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
  Ok,
  OkText,
  Cancel,
  CancelText,
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
              <Ok onPress={createList}>
                <OkText>Criar</OkText>
              </Ok>
              <Cancel onPress={onClose}>
                <CancelText>Cancelar</CancelText>
              </Cancel>
            </ConfirmButtons>
          </Box>
        </NewListContainer>
      </Modal>
    )
  );
};

const MyList = () => {
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
            <Card color={randomColors()}>
              <CardTitle>1</CardTitle>
            </Card>

            <CardInvisible />
          </ContainerCards>
        </ScrollView>
      </Container>
    </>
  );
};

export default MyList;
