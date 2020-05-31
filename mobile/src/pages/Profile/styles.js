import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #161719;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 30px 20px;
`;

export const Header = styled.View`
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const SettingsButton = styled.TouchableOpacity``;

export const InfoBox = styled.View`
  align-items: center;
`;

export const ProfileImage = styled.Image``;

export const Name = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 25px;
  color: #ffffff;
  margin-top: 30px;
`;

export const Username = styled.Text`
  font-family: "Roboto-Light";
  font-size: 15px;
  letter-spacing: 0.5px;
  color: #29a19c;
`;

export const Email = styled.View`
  align-items: center;
  margin-top: 40px;
  margin-bottom: 150px;
`;

export const EmailTitle = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 15px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #15514e;
`;

export const EmailValue = styled.Text`
  font-family: "Roboto-Light";
  font-size: 15px;
  letter-spacing: 0.5px;
  text-transform: lowercase;
  color: #ffffff;
`;

export const Buttons = styled.View``;

export const Button = styled.TouchableOpacity`
  background: #29a19c;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(41, 161, 156, 0.25);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  font-family: "Roboto-Regular";
  margin-left: 15px;
`;
