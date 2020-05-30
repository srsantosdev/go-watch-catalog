import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Container, OptionsContainer, Option } from "./styles";

const Options = (props) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <TouchableOpacity onPress={() => setActive(!active)}>
        <Ionicons name="ios-ellipsis-vertical" size={40} color="#fff" />
      </TouchableOpacity>
      {active && (
        <OptionsContainer>
          <Option title="Excluir Lista" />
        </OptionsContainer>
      )}
    </Container>
  );
};

export default Options;
