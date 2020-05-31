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

export const FavoriteContainer = styled.TouchableOpacity``;

export const Item = styled.TouchableOpacity`
  height: 55px;
  background: #121214;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 12px 20px;
`;

export const Box = styled.View``;

export const Title = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 14px;
  text-transform: uppercase;
  color: #29a19c;
`;

export const Duration = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DurationTitle = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  color: #15514e;
`;

export const DurationValue = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 12px;
  color: #ffffff;
`;

export const EmptyListContainer = styled.View`
  position: absolute;
  top: 30px;
  left: 20px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Illustration = styled.Image``

export const TitleEmpty = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 18px;
  color: #fff;
  margin-top: 32px;
`

export const Message = styled.Text`
  font-family: "Roboto-Light";
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: #29a19c;
`
