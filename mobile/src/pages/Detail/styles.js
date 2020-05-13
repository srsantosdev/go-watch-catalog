import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #161719;
  height: 100%;
  width: 100%;
`;

export const BoxImage = styled.View`
  background-color: #000;
  height: 625px;
`;

export const Image = styled.Image``;

export const Box = styled.View`
  padding: 30px 20px;
  margin-bottom: 80px;
`;

export const ContainerChips = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Year = styled.Text`
  text-align: center;
  color: #0f1012;
  font-family: "Roboto-Medium";
  font-size: 10px;
`;

export const Launch = styled.Text`
  color: #15514e;
  text-transform: uppercase;
  font-family: "Roboto-Light";
  font-size: 10px;
  letter-spacing: 1px;
`;

export const ChipYear = styled.View`
  background-color: #15514e;
  width: 40px;
  height: 15px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const ChipLaunch = styled.View`
  width: 75px;
  height: 15px;
  border: 0.2px solid #29a19c;
  border-radius: 5px;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
`;

export const CategoryList = styled.View`
  flex-direction: row;
`;

export const Category = styled.Text`
  color: #15514e;
  font-family: "Roboto-Light";
  font-size: 12px;
  letter-spacing: 1px;
`;

export const Sinopse = styled.View``;

export const Subtitle = styled.Text`
  margin-top: 20px;
  color: #29a19c;
  font-family: "Roboto-Regular";
  font-size: 14px;
  text-transform: uppercase;
`;

export const SinopseText = styled.Text`
  margin-top: 8px;
  color: #fff;
  opacity: 0.5;
  font-family: "Roboto-Regular";
  font-size: 12px;
  line-height: 14px;
`;

export const OtherDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerOtherDetail = styled.View``;

export const BoxDetail = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;

export const DetailTitle = styled.Text`
  font-family: "Roboto-Light";
  font-size: 12px;
  line-height: 14px;
  color: #29a19c;
  margin-right: 5px;
`;

export const DetailText = styled.Text`
  font-family: "Roboto-Medium";
  color: #fff;
  opacity: 0.5;
  font-size: 12px;
  line-height: 14px;
`;

export const ScoreContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Points = styled.Text`
  text-align: center;
  font-family: "Roboto-Light";
  font-size: 12px;
  color: #fff;
`;

export const MainCast = styled.View``;

export const ContainerCards = styled.View`
  margin-top: 10px;
`;

export const ActorCard = styled.View`
  width: 100px;
  height: 175px;
  background-color: #141517;
  border-radius: 5px;
  align-items: center;
`;

export const ActorImage = styled.Image``;

export const ActorName = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 12px;
  color: #fff;
`;

export const CharacterName = styled.Text`
  font-family: "Roboto-Light";
  font-size: 10px;
  color: #fff;
  text-transform: uppercase;
`;

export const RatingCard = styled.View`
  background-color: #0b0c0d;
  margin-top: 10px;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px rgba(41, 161, 156, 0.2);
  width: 100%;
  height: 80px;
`;

export const RatingTitle = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #29a19c;
  margin-bottom: 10px;
`;

export const StarsContainer = styled.View`
  flex-direction: row;
`;

export const Star = styled.TouchableOpacity``;

export const ContainerFavoriteButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #29a19c;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30px;
  top: 600px;
`;
