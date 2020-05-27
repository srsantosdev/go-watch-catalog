import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { Container, ContainerIcons, HeaderTitle, UserImage } from "./styles";

const Header = ({ title = "" }) => {
  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
      <ContainerIcons>
        <TouchableOpacity>
          <Ionicons name="ios-notifications-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <UserImage />
      </ContainerIcons>
    </Container>
  );
};

export default Header;
