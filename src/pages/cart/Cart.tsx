import React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { Navbar, Announcement, Footer } from "../../components";
import {
  Container,
  Wrapper,
  Button,
  Info,
  TextGroup,
  Text,
  ProductContainer,
  Image,
  ProductInfo,
  Left,
  Right,
  AmountContainer,
  Amount,
  Summary,
  Price,
  TextDes,
  TextInfo,
  Color,
  ProductPriceInfo,
  PriceContainer,
  PriceText,
  Hr,
} from "./styles";

export const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <h2>YOUR BAG</h2>
        <Info>
          <Button href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            CONTINUE SHOPPING
          </Button>
          <TextGroup>
            <Text>Shopping Bag (2)</Text>
            <Text>Your Wishlist (0)</Text>
          </TextGroup>
          <Button href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            CHECKOUT NOW
          </Button>
        </Info>

        <ProductContainer>
          <ProductPriceInfo>
            <ProductInfo>
              <Image>
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
              </Image>
              <TextDes>
                <Left>
                  <TextInfo>
                    <strong>Product:</strong> JESSIE THUNDER SHOES
                  </TextInfo>
                  <TextInfo>
                    <strong>ID:</strong> 9381378293
                  </TextInfo>
                  <Color></Color>
                  <TextInfo>
                    <strong>Size:</strong> 38
                  </TextInfo>
                </Left>

                <Right>
                  <AmountContainer>
                    <MinusOutlined
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />
                    <Amount>1</Amount>
                    <PlusOutlined
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />
                  </AmountContainer>
                  <Price>$ 20</Price>
                </Right>
              </TextDes>
            </ProductInfo>
            <Hr />

            <ProductInfo>
              <Image>
                <img
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt=""
                />
              </Image>
              <TextDes>
                <Left>
                  <TextInfo>
                    <strong>Product:</strong> JESSIE THUNDER SHOES
                  </TextInfo>
                  <TextInfo>
                    <strong>ID:</strong> 9381378293
                  </TextInfo>
                  <Color></Color>
                  <TextInfo>
                    <strong>Size:</strong> 38
                  </TextInfo>
                </Left>

                <Right>
                  <AmountContainer>
                    <MinusOutlined
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />
                    <Amount>1</Amount>
                    <PlusOutlined
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />
                  </AmountContainer>
                  <Price>$ 20</Price>
                </Right>
              </TextDes>
            </ProductInfo>
          </ProductPriceInfo>

          <Summary>
            <h2>ORDER SUMMARY</h2>
            <PriceContainer>
              <PriceText>
                Subtotal <span>$80</span>
              </PriceText>
              <PriceText>
                Estimated Shipping <span>$5.90</span>
              </PriceText>
              <PriceText>
                Shipping Discount <span> -$5.90</span>
              </PriceText>
              <PriceText>
                <h3>
                  {" "}
                  <strong>Total</strong>
                </h3>{" "}
                <span>$80</span>
              </PriceText>
            </PriceContainer>
            <Button href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              CHECKOUT NOW
            </Button>
          </Summary>
        </ProductContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
