import React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { Announcement, Navbar, Newsletter, Footer } from "../../components";
import {
  Wrapper,
  ImageProduct,
  Info,
  Price,
  FilterGroup,
  Filter,
  AddContainer,
  AmountContainer,
  Amount,
  FilterTitle,
  ColorOption,
  Button,
} from "./styles";

export const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageProduct>
          <img
            src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
            alt="shirt"
          />
        </ImageProduct>
        <Info>
          <h2>Denim Jumpsuit</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptatibus nobis perferendis voluptatum ad maiores eos quisquam
            minus deleniti illo, in reiciendis dolor, accusantium sed facere
            similique, libero molestias temporibus.
          </p>
          <Price>$ 20</Price>

          <FilterGroup>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <ColorOption color="black" />
              <ColorOption color="darkblue" />
              <ColorOption color="gray" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <select>
                <option disabled selected>
                  Size
                </option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </Filter>
          </FilterGroup>

          <AddContainer>
            <AmountContainer>
              <MinusOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
              <Amount>1</Amount>
              <PlusOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
            </AmountContainer>

            <Button>Add to cart</Button>
          </AddContainer>
        </Info>
      </Wrapper>

      <Newsletter />
      <Footer />
    </>
  );
};
