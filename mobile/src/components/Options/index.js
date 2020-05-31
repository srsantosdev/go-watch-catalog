import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  MoreButton,
  OptionsContainer,
  Option,
  OptionText,
} from "./styles";

const Options = ({ options = [] }) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <MoreButton onPress={() => setActive(!active)}>
        <Ionicons name={active ? "ios-close" : "md-more"} size={30} color="#fff" />
      </MoreButton>

      {active && (
        <OptionsContainer>
          {options.map(({ name, task }, index) => (
            <Option
              key={index}
              onPress={() => {
                setActive(false);
                task();
              }}
            >
              <OptionText>{name}</OptionText>
            </Option>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};

export default Options;
