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
  width: 75%;
`;

export const LogoImage = styled.Image`
  margin-bottom: 80px;
`;

export const FormContainer = styled.View`
  width: 100%;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 36px;
`;

export const TextForgotPassword = styled.Text`
  text-align: right;
  text-transform: uppercase;
  color: #fff;
  margin-top: 10px;
  font-family: "Roboto-Regular";
`;

export const RegisterButton = styled.TouchableOpacity`
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 5px;
  font-family: "Roboto-Regular";
`;
