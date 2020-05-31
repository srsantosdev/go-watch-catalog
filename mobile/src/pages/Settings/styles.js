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
  color: #fff;
  font-family: "Roboto-Regular";
  text-transform: uppercase;
  font-size: 18px;
`;

export const Invisible = styled.View``;

export const Options = styled.View`
  margin-top: 40px;
`;

export const Option = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const OptionText = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 15px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const ContainerIcon = styled.View`
  width: 40px;
  justify-content: center;
  align-items: center;
`

export const Logout = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 15px;
  text-transform: uppercase;
  color: #e02a2a;
`;

export const LogoutContainer = styled.TouchableOpacity`
  margin-top: 70px;
`;

export const Footer = styled.View`
  margin-top: 370px;
`;

export const Copyright = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-transform: capitalize;
  color: #b8b2b2;
`;

export const Version = styled.View`
  flex-direction: row;
`;

export const VersionTitle = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-transform: uppercase;
  color: #6a6a6a;
`;

export const VersionDescription = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-transform: capitalize;
  color: #b8b2b2;
`;
