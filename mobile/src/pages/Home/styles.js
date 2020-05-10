import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #161719;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 30px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-family: "Roboto-Regular";
  font-size: 20px;
`;

export const ContainerIcons = styled.View``;

export const UserImage = styled.Image``;

export const Title = styled.Text`
  color: #fff;
  font-family: "Roboto-Medium";
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ContainerCards = styled.ScrollView``;

export const Box = styled.View`
  margin-bottom: 50px;
`;

export const AddListCard = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #141517;
  border-radius: 5px;
`;

export const AddListCardTitle = styled.Text`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-family: "Roboto-Regular";
  font-size: 12px;
`;

export const Card = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-left: 10px;
  background-color: ${(props) => (props.color ? props.color : "#71F79F")};
`;

export const CardTitle = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-align: center;
`;

export const MoviesAndSeriesContainer = styled.View``;

export const SubTitle = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto-Light";
  font-size: 14px;
  margin-bottom: 15px;
`;

export const ContainerItems = styled.ScrollView`
  margin-bottom: 30px;
`;

export const CardItems = styled.TouchableOpacity`
  width: 100px;
  height: 150px;
  background-color: #141517;
  border-radius: 5px;
  margin-right: 10px;
`;

export const ImageMovie = styled.Image``;
