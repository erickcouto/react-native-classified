import React from "react";
import {
  Container,
  Description,
  Title,
  ProductImage,
  Price,
  Date
} from "./styles";

const Product = props => (
  <Container>
    <ProductImage source={{ uri: props.item.image }} />
    <Description>
      <Title>{props.item.title}</Title>
      <Price>U${props.item.price.toFixed(2)}</Price>
      <Date>{props.item.data}</Date>
    </Description>
  </Container>
);
export default Product;
