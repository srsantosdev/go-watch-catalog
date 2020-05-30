import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

const Options = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Ionicons name="ios-ellipsis-vertical" size={40} color="#fff" />
      </TouchableOpacity>
      <OptionsContainer>
        <Option />
      </OptionsContainer>
    </Container>
  );
};

export default Options;
