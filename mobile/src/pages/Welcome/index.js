import React from "react";

import {
  BackgroundImage,
  Container,
  LogoImage,
  Description,
  StartButton,
  Button,
  ButtonDescription,
} from "./styles";

import background from './../../assets/images/WelcomeImage.jpg'
import logo from './../../assets/logo.png'

const Welcome = () => {
  return (
    <BackgroundImage source={background}>
      <Container>
        <LogoImage source={logo} />
        <Description>
          Encontre e organize os melhores filmes e series conforme o seu gosto.
        </Description>

        <StartButton>
          <Button>
            <Power />
          </Button>
          <ButtonDescription>Iniciar</ButtonDescription>
        </StartButton>
      </Container>
    </BackgroundImage>
  );
};

export default Welcome;
