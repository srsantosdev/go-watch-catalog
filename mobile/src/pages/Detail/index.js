import React, { useState, useEffect } from "react";

import { Ionicons } from "@expo/vector-icons";

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
} from "./styles";

const FavoriteButton = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <ContainerFavoriteButton onPress={() => setFavorite(!favorite)}>
      {favorite ? (
        <Ionicons name="ios-heart-empty" size={24} color="#fff" />
      ) : (
        <Ionicons name="ios-heart" size={24} color="#fff" />
      )}
    </ContainerFavoriteButton>
  );
};

const StarsRating = () => {
  const [value, setValue] = useState(0);

  const [stars] = useState([
    { active: false, value: 1 },
    { active: false, value: 2 },
    { active: false, value: 3 },
    { active: false, value: 4 },
    { active: false, value: 5 },
  ]);

  useEffect(() => {
    stars.forEach((star) => {
      if (star.value <= value) {
        star.active = true;
      }
    });
  }, [value]);

  return (
    <StarsContainer>
      {stars.map((star, index) => (
        <Star key={index} onPress={() => setValue(star.value)}>
          <Ionicons
            name={star.active ? "ios-star-outline" : "ios-star"}
            size={24}
            color="#29A19C"
          />
        </Star>
      ))}
    </StarsContainer>
  );
};

const Detail = () => {
  return (
    <Container>
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
          <ContainerCards>
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
