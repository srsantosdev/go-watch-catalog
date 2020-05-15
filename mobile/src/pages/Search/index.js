import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "./../../components/Input";
import {
  Page,
  ContainerItems,
  ContainerButtonSwitch,
  ButtonSwitch,
  Item,
  ImageItem,
  ContainerWithItems,
  ContainerWithoutItems,
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

const WithItems = (items = []) => {
  return (
    <ContainerWithItems>
      <ContainerButtonSwitch>
        <ButtonSwitch>Filmes</ButtonSwitch>
        <ButtonSwitch>Series</ButtonSwitch>
      </ContainerButtonSwitch>

      <ContainerItems>
        {items.map((_) => (
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
    <ContainerWithoutItems>
      <Illustration />
      <Title>Oops!</Title>
      <Message>Nada foi encontrado.</Message>
    </ContainerWithoutItems>
  );
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
          <Ionicons name="ios-search" size={24} color="black" />
        </Icon>
      </ContainerInputSearch>

      {search && options.lenght > 0 ? (
        <WithItems items={options} />
      ) : (
        <WithoutItems />
      )}
    </Page>
  );
};

export default Search;
