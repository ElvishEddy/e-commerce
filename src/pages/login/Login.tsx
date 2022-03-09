import React from "react";

import {
  Container,
  Form,
  Wrapper,
  Input,
  Button,
  Link,
  LinkContainer,
} from "./styles";

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <h3>SIGN IN</h3>
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Password" />
          <Button href="#">LOGIN</Button>
        </Form>
        <LinkContainer>
          <Link href="#">Do not you remember the password?</Link>
          <Link href="#">Create a new account</Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};
