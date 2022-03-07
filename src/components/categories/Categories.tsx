import React from "react";

import { categories } from "../../data";
import { CategoryItem } from "./category-item";
import { Container } from "./styles";

export const Categories = () => {
  return (
    <Container>
      {categories &&
        categories.length > 0 &&
        categories.map((item) => {
          return <CategoryItem {...item} key={item.id} />;
        })}
    </Container>
  );
};
