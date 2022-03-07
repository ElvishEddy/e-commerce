import React from "react";
import { Button } from "antd";

import { Container, Image, Info } from "./styles";

export const CategoryItem = (props: any) => {
  const { id, img, title } = props;
  return (
    <Container key={id}>
      <Image src={img} alt={title} />

      <Info>
        <h1>{title}</h1>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
