import styled from "styled-components/native";

export const NewListContainer = styled.View`
  background: #161719;
  border: 0.5px solid #29a19c;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 180px;
`;

export const Box = styled.View`
  width: 90%;
`;

export const Title = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
`;

export const ConfirmButtons = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
