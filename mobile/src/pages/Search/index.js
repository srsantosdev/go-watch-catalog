import React, { useState, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "./../../components/Input";
import MoviesSeriesSwitch from "./../../components/MoviesSeriesSwitch";
import {
  Page,
  Grid,
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

      <Grid
        itemDimension={160}
        showsVerticalScrollIndicator={false}
        spacing={5}
        items={items}
        renderItem={({ item, index }) => (
          <Item>
            <ImageItem />
          </Item>
        )}
      />
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

const RenderScreen = ({ search = "", options = [] }) => {
  if (!search && options.length < 0) {
    return <View />;
  }
  if (search && options.length === 0) {
    return <WithoutItems />;
  }
  if (search && options.length > 0) return <WithItems items={options} />;
  return null;
};

const Search = () => {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);

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

      <RenderScreen options={options} search={search} />
    </Page>
  );
};

export default Search;
