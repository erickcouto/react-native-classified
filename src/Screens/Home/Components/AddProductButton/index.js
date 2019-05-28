import React, { Component } from "react";

import { Text } from "react-native";
import { Button, ButtonContainer } from "./style";
import { Icon } from "native-base";

const AddProductButton = () => (
  <ButtonContainer>
    <Button>
      <Icon type="AntDesign" name="camerao" style={{ color: "#fff" }} />
      <Text
        style={{
          color: "#fff",
          padding: 5,
          fontWeight: "bold",
          fontSize: 14
        }}
      >
        Add Product
      </Text>
    </Button>
  </ButtonContainer>
);

export default AddProductButton;
