import React from "react";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

import { Container, InputEmail, ButtonIcon } from "./styles";

export const Newsletter = () => {
  return (
    <Container>
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products</p>
      <InputEmail>
        <Input placeholder="Your email" />
        <ButtonIcon>
          <SendOutlined />
        </ButtonIcon>
      </InputEmail>
    </Container>
  );
};
