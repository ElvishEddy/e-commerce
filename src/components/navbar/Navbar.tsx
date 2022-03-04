import React from "react";
import { Input, Badge, Avatar } from "antd";

import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Container, Left, Center, Right, SearchContainer } from "./styles";
import "antd/dist/antd.css";

const { Search } = Input;
export const Navbar = () => {
  return (
    <Container>
      <Left>
        <p>EN</p>
        <SearchContainer>
          <Search placeholder="Search..." />
        </SearchContainer>
      </Left>
      <Center>
        <h1>LIMA.</h1>
      </Center>
      <Right>
        <ul>
          <li>
            <a href="#">REGISTER</a>
          </li>
          <li>
            {" "}
            <a href="#">SIGN IN</a>
          </li>
          <li>
            {" "}
            <a href="#">
              <Badge count={6} size="small">
                <ShoppingCartOutlined style={{ fontSize: "17px" }} />
              </Badge>
            </a>
          </li>
        </ul>
      </Right>
    </Container>
  );
};
