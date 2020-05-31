import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #161719;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 30px 20px;
`;

export const ContainerTotal = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Total = styled.Text`
  font-family: "Roboto-Thin";
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Strong = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 13px;
  color: #29a19c;
`;

export const ScrollView = styled.ScrollView`
  margin-bottom: 30px;
`;

export const ContainerCards = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const AddListCard = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  background-color: #141517;
  border-radius: 5px;
  border: 1px solid #29a19c;
  margin-bottom: 12px;
`;

export const AddListCardTitle = styled.Text`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-family: "Roboto-Regular";
  font-size: 12px;
`;

export const Card = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 5px;
  background-color: ${(props) => (props.color ? props.color : "#71F79F")};
  margin-bottom: 12px;
`;

export const CardTitle = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-family: "Roboto-Regular";
  font-size: 12px;
  text-align: center;
`;

export const CardInvisible = styled.View`
  width: 110px;
  background-color: transparent;
`;
