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
  position: absolute;
`;

export const BoxLogoAndDescription = styled.View`
  align-items: center;
  margin-bottom: 120px;
`;

export const LogoImage = styled.Image``;

export const Description = styled.Text`
  color: #fff;
  width: 345px;
  margin-top: 35px;
  font-size: 14px;
  text-align: center;
  font-family: 'Roboto-Regular';
`;

export const StartButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Button = styled.View`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background-color: #29A19C;
  align-items: center;
  justify-content: center;
`;

export const ButtonDescription = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  margin-top: 10px;
  font-family: "Roboto-Medium";
`;
