import React from "react";
import Modal from "./../../components/Modal";
import Input from "./../../components/Input";

import { OK, Cancel } from "./../ConfirmButtons";

import { NewListContainer, Box, Title, ConfirmButtons } from "./styles";

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

export default NewList;
