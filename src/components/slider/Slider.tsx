import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import { sliderItems } from "../../data";
import { Container, Arrow, ImageWrap, Info, Wrapper, Slide } from "./styles";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const lastIndex = sliderItems.length - 1;

  const handleOnLeft = () => {
    setIndex(index > 0 ? index - 1 : lastIndex);
  };

  const handleOnRight = () => {
    setIndex(index < lastIndex ? index + 1 : 0);
  };
  return (
    <Container>
      <Arrow onClick={handleOnLeft}>
        <CaretLeftOutlined />
      </Arrow>

      {/* @ts-ignore */}
      <Wrapper index={index}>
        {sliderItems &&
          sliderItems.length > 0 &&
          sliderItems.map((item, slideIndex) => {
            const { id, img, title, desc, bg } = item;

            return (
              // @ts-ignore
              <Slide key={id} bg={bg}>
                <ImageWrap>
                  <img src={img} alt={title} />
                </ImageWrap>
                <Info>
                  <h1>{title}</h1>
                  <p>{desc}</p>
                  <Button>SHOW NOW</Button>
                </Info>
              </Slide>
            );
          })}
      </Wrapper>
      <Arrow onClick={handleOnRight}>
        <CaretRightOutlined />
      </Arrow>
    </Container>
  );
};
