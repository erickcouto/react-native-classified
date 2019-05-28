import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  width: 100%;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 3;
  border: 1px solid #ddd;
  flex-direction: row;
  margin-bottom: 10px;
  border-radius: 5;
`;

export const ProductImage = styled.Image`
  width: 140px;
  height: 140px;
  resize-mode: stretch;
`;

export const Description = styled.View`
  padding: 10px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #222;
  padding: 5px 0;
  height: 40px;
`;
export const Price = styled.Text`
  font-size: 20px;
  color: #000;
  padding: 5px 0;
`;
export const Date = styled.Text`
  font-size: 12px;
  color: #999;
  padding: 5px 0;
`;
