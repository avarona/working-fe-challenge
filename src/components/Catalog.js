import React from "react";
import Flex, { FlexItem } from "styled-flex-component";
import Product from "./Product";
import Container from "./Container";

import fakeProduct from "../helpers/fakeProduct";

const Catalog = () => {
  return (
    <Container>
      <Flex full wrap={"true"}>
        <FlexItem grow={1} shrink={1} basis="50%">
          <Product {...fakeProduct} />
        </FlexItem>
      </Flex>
    </Container>
  );
};

export default Catalog;
