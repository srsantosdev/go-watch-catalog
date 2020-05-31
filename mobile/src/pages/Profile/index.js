import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  SettingsButton,
  InfoBox,
  ProfileImage,
  Name,
  Username,
  Email,
  EmailTitle,
  EmailValue,
  Buttons,
  Button,
  ButtonText,
} from "./styles";

import profileImage from "./../../assets/FotoUserDefault.png";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <SettingsButton onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="ios-settings" size={25} color="#fff" />
        </SettingsButton>
      </Header>
      <InfoBox>
        <ProfileImage source={profileImage} />
        <Name>Nome Completo</Name>
        <Username>@nomeusuario</Username>
        <Email>
          <EmailTitle>E-mail</EmailTitle>
          <EmailValue>contato@gowatch.com.br</EmailValue>
        </Email>
      </InfoBox>
      <Buttons>
        <Button onPress={() => navigation.navigate("EditData")}>
          <Ionicons name="md-create" size={25} color="#fff" />
          <ButtonText>Editar Dados</ButtonText>
        </Button>
        <Button>
          <Ionicons name="md-share" size={25} color="#fff" />
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      </Buttons>
    </Container>
  );
};

export default Profile;
