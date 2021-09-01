import React from "react";
import Flex, { FlexItem } from "styled-flex-component";
import Product from "./Product";
import Container from "./Container";

import placeholderProduct from "../helpers/placeholderProduct";

const Catalog = () => {
  return (
    <Container>
      <Flex full wrap={"true"}>
        <FlexItem grow={1} shrink={1} basis="50%">
          <Product {...placeholderProduct} />
        </FlexItem>
      </Flex>
    </Container>
  );
};

export default Catalog;
