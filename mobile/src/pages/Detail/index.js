import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  BoxImage,
  Image,
  Box,
  ContainerChips,
  Year,
  Launch,
  ChipYear,
  ChipLaunch,
  Title,
  CategoryList,
  Category,
  Sinopse,
  Subtitle,
  SinopseText,
  OtherDetails,
  ContainerOtherDetail,
  BoxDetail,
  DetailTitle,
  DetailText,
  ScoreContainer,
  Points,
  MainCast,
  ContainerCards,
  ActorCard,
  ActorImage,
  ActorName,
  CharacterName,
  RatingCard,
  RatingTitle,
  StarsContainer,
  Star,
  ContainerFavoriteButton,
  Header,
  BackButton,
} from "./styles";

const FavoriteButton = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <ContainerFavoriteButton onPress={() => setFavorite(!favorite)}>
      {favorite ? (
        <Ionicons name="ios-heart" size={24} color="#fff" />
      ) : (
        <Ionicons name="ios-heart-empty" size={24} color="#fff" />
      )}
    </ContainerFavoriteButton>
  );
};

const StarsRating = () => {
  const [rating, setRating] = useState(0);
  const [maxStars] = useState(5);

  const updateRating = (value) => {
    setRating(value);
  };

  const RatingBar = () => {
    const ratingBar = [];

    for (let key = 1; key <= maxStars; key++) {
      ratingBar.push(
        <Star key={key} onPress={() => updateRating(key)}>
          <Ionicons
            name={key <= rating ? "ios-star" : "ios-star-outline"}
            size={24}
            color="#29A19C"
          />
        </Star>
      );
    }

    return ratingBar;
  };

  return (
    <StarsContainer>
      <RatingBar />
    </StarsContainer>
  );
};

const Detail = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
        </BackButton>
      </Header>

      <BoxImage>
        <Image />
      </BoxImage>

      <FavoriteButton />

      <Box>
        <ContainerChips>
          <ChipYear>
            <Year>2020</Year>
          </ChipYear>
          <ChipLaunch>
            <Launch>Lançamento</Launch>
          </ChipLaunch>
        </ContainerChips>

        <Title>Sonic: O Filme</Title>

        <CategoryList>
          <Category>Ação • </Category>
          <Category>Ficção Científica • </Category>
          <Category>Comédia • </Category>
          <Category>Ação</Category>
        </CategoryList>

        <Sinopse>
          <Subtitle>Sinopse</Subtitle>
          <SinopseText>
            Baseado no videojogo da Sega, sucesso à escala global, Sonic: O
            Filme conta a história do ouriço mais rápido do mundo a partir do
            momento em que este chega à sua nova casa – o planeta Terra. Nesta
            comédia e aventura live-action, Sonic e o seu novo melhor amigo Tom
            juntam-se para defender o planeta do génio do mal, o Dr. Robotnik, e
            dos seus planos para domínio do mundo.
          </SinopseText>
        </Sinopse>

        <OtherDetails>
          <ContainerOtherDetail>
            <BoxDetail>
              <DetailTitle>Duração: </DetailTitle>
              <DetailText>1h 39m</DetailText>
            </BoxDetail>
            <BoxDetail>
              <DetailTitle>Direção: </DetailTitle>
              <DetailText>Jeff Fowler</DetailText>
            </BoxDetail>
          </ContainerOtherDetail>

          <ScoreContainer>
            <Ionicons name="ios-star" size={24} color="#29A19C" />
            <Points>4.5</Points>
          </ScoreContainer>
        </OtherDetails>

        <MainCast>
          <Subtitle>Elenco Principal</Subtitle>
          <ContainerCards
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <ActorCard>
              <ActorImage />
              <ActorName>Ben Schwartz</ActorName>
              <CharacterName>Sonic (voz)</CharacterName>
            </ActorCard>
            <ActorCard>
              <ActorImage />
              <ActorName>Ben Schwartz</ActorName>
              <CharacterName>Sonic (voz)</CharacterName>
            </ActorCard>
            <ActorCard>
              <ActorImage />
              <ActorName>Ben Schwartz</ActorName>
              <CharacterName>Sonic (voz)</CharacterName>
            </ActorCard>
            <ActorCard>
              <ActorImage />
              <ActorName>Ben Schwartz</ActorName>
              <CharacterName>Sonic (voz)</CharacterName>
            </ActorCard>
          </ContainerCards>
        </MainCast>

        <RatingCard>
          <RatingTitle>Avalie este filme</RatingTitle>
          <StarsRating />
        </RatingCard>
      </Box>
    </Container>
  );
};

export default Detail;
