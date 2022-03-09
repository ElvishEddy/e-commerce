import React from "react";

import { Container, Form, Wrapper, Input, Button } from "./styles";

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <h3>CREATE AN ACCOUNT</h3>
        <Form>
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm password" />
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <strong>PRIVACY POLICY</strong>
          </p>
          <Button href="#">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
