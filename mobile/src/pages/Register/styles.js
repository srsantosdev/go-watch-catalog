import styled from "styled-components/native";

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Opacity = styled.View`
  position: absolute;
  background-color: #000;
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 75%;
`;

export const Header = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  margin: 40px;
`;

export const LogoImage = styled.Image`
  margin-bottom: 80px;
`;

export const FormContainer = styled.View`
  width: 100%;
  margin-bottom: 35px;
`;

export const Description = styled.Text`
  color: #fff;
  margin-top: -60px;
  margin-bottom: 60px;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Roboto-Regular";
`;

export const BackButton = styled.TouchableOpacity``;
