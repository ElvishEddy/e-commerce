import React from "react";
import { Button } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import { Container, Arrow, ImageWrap, Info, Wrapper, Slide } from "./styles";

export const Slider = () => {
  return (
    <Container>
      <Arrow>
        <CaretLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageWrap>
            <img src="https://i.ibb.co/cXFnLLV/3.png" alt="XsdmR2c" />
          </ImageWrap>
          <Info>
            <h1>LOUNGEWEAR LOVE</h1>
            <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
            <Button>SHOW NOW</Button>
          </Info>
        </Slide>
      </Wrapper>
      <Arrow>
        <CaretRightOutlined />
      </Arrow>
    </Container>
  );
};
