import React from "react";

import { View, FlatList, Text } from "react-native";
import Product from "../Product";
import { productsJson } from "../../data/products";

const ProductVerticalList = () => (
  <View style={{ flex: 1 }}>
    <Text
      style={{
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 20,
        fontSize: 16,
        fontWeight: "bold"
      }}
    >
      More Products
    </Text>
    <FlatList
      styles={{ flex: 1 }}
      data={productsJson}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Product key={item.id} item={item} />}
    />
  </View>
);
export default ProductVerticalList;
