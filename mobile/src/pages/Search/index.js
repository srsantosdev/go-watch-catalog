import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "./../../components/Input";
import MoviesSeriesSwitch from "./../../components/MoviesSeriesSwitch";
import {
  Page,
  ContainerItems,
  Item,
  ImageItem,
  ContainerWithItems,
  ContainerWithoutItem,
  Illustration,
  Title,
  Message,
  Header,
  HeaderTitle,
  ContainerIcons,
  UserImage,
  ContainerInputSearch,
  Icon,
} from "./styles";

import illustration from "./../../assets/RoboBuscaSemResultados.png";

const WithItems = ({ items = [] }) => {
  const [option, setOption] = useState("");
  return (
    <ContainerWithItems>
      <MoviesSeriesSwitch option={(option) => setOption(option)} />

      <ContainerItems>
        {items.map((item) => (
          <Item>
            <ImageItem />
          </Item>
        ))}
      </ContainerItems>
    </ContainerWithItems>
  );
};

const WithoutItems = () => {
  return (
    <ContainerWithoutItem>
      <Illustration source={illustration} />
      <Title>Oops!</Title>
      <Message>Nada foi encontrado.</Message>
    </ContainerWithoutItem>
  );
};

const Search = () => {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([1, 2, 3, 4]);

  return (
    <Page>
      <Header>
        <HeaderTitle>Buscar</HeaderTitle>
        <ContainerIcons>
          <TouchableOpacity>
            <Ionicons name="ios-notifications-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <UserImage />
        </ContainerIcons>
      </Header>

      <ContainerInputSearch>
        <Input
          placeholder="Buscar por nome ou categoria."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <Icon>
          <Ionicons name="ios-search" size={24} color="#fff" />
        </Icon>
      </ContainerInputSearch>

      <WithItems items={options} />
      {/* {search && options.lenght > 0 ? (
        ) : (
          <WithoutItems />
      )} */}
    </Page>
  );
};

export default Search;
