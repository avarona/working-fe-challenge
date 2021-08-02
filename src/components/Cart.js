import React from "react";
import Flex, { FlexItem } from "styled-flex-component";
import styled from "styled-components";
import Container from "./Container";

import fakeProduct from "../helpers/fakeProduct";

const CartWrapper = styled(Flex)`
  background-color: #f6f5f5;
  height: 100%;
`;

const ImageWrapper = styled.img`
  height: 75px;
  width: 100%;
`;

const ProductDetails = styled.div`
  padding: 0px 16px;
`;

const Text = styled.h4`
  margin: 0;
`;

const CartItem = ({ item }) => {
  return (
    <Flex row>
      <FlexItem grow={1} shrink={1} basis="25%">
        <ImageWrapper src={item.image} alt={item.name} />
      </FlexItem>
      <FlexItem grow={1} shrink={1} basis="50%">
        <ProductDetails>
          <Text>{item.name}</Text>
        </ProductDetails>
      </FlexItem>
      <FlexItem>
        <Text>{`$${item.price}`}</Text>
      </FlexItem>
    </Flex>
  );
};

const Cart = () => {
  return (
    <CartWrapper column full>
      <Container>
        <h2>Cart</h2>
        <CartItem item={fakeProduct} />
      </Container>
    </CartWrapper>
  );
};

export default Cart;
