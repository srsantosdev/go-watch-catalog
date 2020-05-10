import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#161719" />
    </Container>
  )
}

export default Home;