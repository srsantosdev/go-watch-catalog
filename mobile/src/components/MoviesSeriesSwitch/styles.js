import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid #29a19c;
  border-radius: 15px;
  width: 200px;
  height: 25px;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const ButtonSwitch = styled.TouchableOpacity`
  background-color: ${(props) => (props.active ? "#29a19c" : "transparent")};
  width: ${(props) => (props.active ? "110px" : "90px")};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const ButtonSwitchText = styled.Text`
  font-family: ${(props) => (props.active ? "Roboto-Regular" : "Roboto-Light")};
  color: ${(props) => (props.active ? "#161719" : "#29A19C")};
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
`;
