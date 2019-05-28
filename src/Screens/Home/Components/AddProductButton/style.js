import { Dimensions } from "react-native";
import styled from "styled-components/native";

const height = Dimensions.get("window").height;

export const ButtonContainer = styled.View`
  position: absolute;
  top: ${height - 150};
  text-align: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px 25px;
  background: #f78232;
  border-radius: 40;
  width: 180;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  text-align: center;
  flex-direction: row;
  justify-content: center;
`;
