import React from "react";

import {
  ContainerShort,
  DescriptionShort,
  TitleShort,
  ProductImageShort,
  PriceShort
} from "./styles";

const ShortProductItem = props => (
  <ContainerShort>
    <ProductImageShort source={{ uri: props.item.image }} />
    <DescriptionShort>
      <TitleShort>{props.item.title}</TitleShort>
      <PriceShort>U${props.item.price.toFixed(2)}</PriceShort>
    </DescriptionShort>
  </ContainerShort>
);
export default ShortProductItem;
