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
`;

export const BackButton = styled.TouchableOpacity``;

export const TitlePage = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
`;
