import React from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  WechatOutlined,
  PhoneFilled,
  MailOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";

import {
  Container,
  Left,
  SocialMediaIconGroup,
  LinkContainer,
  Center,
  Right,
  LinkLists,
  Icon,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Left>
        <h2>LIMA.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          officiis quod libero quos alias reiciendis, blanditiis distinctio
          harum nihil ducimus nisi! Harum sequi, rem modi placeat voluptatum
          corrupti doloremque impedit!
        </p>

        <SocialMediaIconGroup>
          <Icon color="3B5999">
            <FacebookFilled style={{ fontSize: "22px" }} />
          </Icon>
          <Icon color="E4405F">
            <InstagramOutlined style={{ fontSize: "22px" }} />
          </Icon>
          <Icon color="55ACEE">
            <TwitterOutlined style={{ fontSize: "22px" }} />
          </Icon>
          <Icon color="2ecc71">
            <WechatOutlined style={{ fontSize: "22px" }} />
          </Icon>
        </SocialMediaIconGroup>
      </Left>

      <Center>
        <h3>Useful Links</h3>
        <LinkContainer>
          <LinkLists>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Man Fashion</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
          </LinkLists>

          <LinkLists>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Woman Fashion</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </LinkLists>
        </LinkContainer>
      </Center>

      <Right>
        <h3>Contact</h3>
        <p>
          <span>
            <EnvironmentFilled style={{ fontSize: "18px" }} />
          </span>
          622 Dixie Path, South Tobinchester 98336
        </p>
        <p>
          <span>
            <PhoneFilled style={{ fontSize: "18px" }} />
          </span>
          +123456789
        </p>
        <p>
          <span>
            <MailOutlined style={{ fontSize: "18px" }} />
          </span>
          contact@lima.dev
        </p>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
      </Right>
    </Container>
  );
};
