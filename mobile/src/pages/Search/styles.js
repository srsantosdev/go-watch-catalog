import styled from "styled-components/native";

import { FlatGrid } from "react-native-super-grid";

export const Page = styled.View`
  background-color: #161719;
  width: 100%;
  padding: 30px 20px;
  height: 100%;
`;

export const Grid = styled(FlatGrid)`
  margin-bottom: 210px;
`;

export const Item = styled.TouchableOpacity`
  height: 265px;
  border-radius: 5px;
  background-color: #141517;
`;

export const ImageItem = styled.Image``;

export const ContainerWithItems = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerWithoutItem = styled.View`
  position: absolute;
  top: 30px;
  left: 20px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Illustration = styled.Image``;

export const Title = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 18px;
  color: #fff;
  margin-top: 32px;
`;

export const Message = styled.Text`
  font-family: "Roboto-Light";
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: #29a19c;
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

export const UserImage = styled.View``;

export const ContainerInputSearch = styled.View`
  position: relative;
`;

export const Icon = styled.View`
  position: absolute;
  right: 15px;
  top: 12px;
`;
