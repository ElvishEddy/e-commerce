import React from "react";

import { products } from "../../data";
import { ProductItem } from "./product-item";
import { Container } from "./styles";

export const Products = () => {
  return (
    <Container>
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
    </Container>
  );
};
