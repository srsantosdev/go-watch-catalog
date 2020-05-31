import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
`;

export const OptionsContainer = styled.View`
  border: 0.5px solid #29a19c;
  position: absolute;
  width: 150px;
  top: 40px;
  right: 0px;
  z-index: 40;
  border-radius: 5px;
`;

export const Option = styled.TouchableOpacity`
  min-height: 40px;
  justify-content: center;
  padding-left: 10px;
`;

export const OptionText = styled.Text`
  font-family: "Roboto-Regular";
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
`;

export const MoreButton = styled.TouchableOpacity`
  width: 20px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
