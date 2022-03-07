import React from "react";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import { Container, Image, Circle, Info, Icon } from "./styles";

export const ProductItem = (props: any) => {
  const { id, img } = props.product;

  return (
    <Container key={id}>
      <Circle />
      <Image src={img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <HeartOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
