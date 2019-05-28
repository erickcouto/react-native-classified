import React from "react";

import { View, FlatList, Text } from "react-native";
import { productsJson } from "../../data/products";
import ShortProductItem from "./../Product/ShortProductItem";

const ProductHorizontalList = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      marginBottom: 20,
      paddingLeft: 20
    }}
  >
    <Text
      style={{
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 0
      }}
    >
      Selected for you!
    </Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      styles={{ flex: 1 }}
      data={productsJson}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ShortProductItem key={item.id} item={item} />}
    />
  </View>
);
export default ProductHorizontalList;
