import React, { useState } from "react";
import { Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  BackButton,
  TitlePage,
  Invisible,
  Options,
  Option,
  OptionText,
  Logout,
  LogoutContainer,
  Footer,
  Copyright,
  Version,
  VersionTitle,
  VersionDescription,
  ContainerIcon,
  OptionButton,
} from "./styles";

const Settings = () => {
  const navigation = useNavigation();

  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
        </BackButton>
        <TitlePage>Configurações</TitlePage>

        <Invisible />
      </Header>

      <Options>
        <Option>
          <OptionText>Receber Notificações</OptionText>
          <Switch
            value={notifications}
            onValueChange={() => setNotifications(!notifications)}
          />
        </Option>
        <Option>
          <OptionText>Tema Escuro</OptionText>
          <Switch
            value={darkMode}
            onValueChange={() => setDarkMode(!darkMode)}
            disabled={true}
          />
        </Option>
        <OptionButton onPress={() => navigation.navigate("ChangePassword")}>
          <OptionText>Alterar Senha</OptionText>
          <ContainerIcon>
            <Ionicons name="ios-arrow-forward" size={30} color="#A3F7BF" />
          </ContainerIcon>
        </OptionButton>
      </Options>

      <LogoutContainer>
        <Logout>Finalizar Sessão</Logout>
      </LogoutContainer>

      <Footer>
        <Copyright>Copyright © Todos os direitos reservados.</Copyright>
        <Version>
          <VersionTitle>Versão: </VersionTitle>
          <VersionDescription>0.0.1 Alpha</VersionDescription>
        </Version>
      </Footer>
    </Container>
  );
};

export default Settings;
