import React from "react";
import { Button } from "antd";

import { Container, Image, Info } from "./styles";

export const CategoryItem = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="SHIRT STYLE!"
        />
      </Image>
      <Info>
        <p>SHIRT STYLE!</p>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
