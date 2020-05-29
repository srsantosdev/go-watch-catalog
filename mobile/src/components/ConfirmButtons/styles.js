import styled from "styled-components/native";

export const ContainerOk = styled.TouchableOpacity`
  background: #29a19c;
  border-radius: 5px;
  width: 138px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

export const ContainerCancel = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #29a19c;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 25px;
`;

export const OkText = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const CancelText = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #29a19c;
`;
