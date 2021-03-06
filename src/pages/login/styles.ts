import styled from "styled-components";

import { flex, mobile } from "../../styles";

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgb(255, 255, 255, 0.4), rgb(255, 255, 255, 0.4)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 30%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2em;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    ${mobile({ fontSize: "1.2rem" })}
  }

  ${mobile({ maxWidth: "85%" })}
`;

export const Form = styled.form`
  ${flex({ flexWrap: "wrap" })}
  gap: 1.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.2em 0.5em;
  border: 1px solid #ccc;
  outline: none;

  &::-webkit-input-placeholder {
    font-size: 0.9rem;
  }
`;

export const Button = styled.a`
  position: relative;
  font-size: 1rem;
  padding: 0.3em 1em;
  background-color: #f7f7f7;
  color: #eec9ca;
  &:hover {
    color: #e48b92;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    background-color: #e48b92;
    transition: width 0.3s ease;
  }

  &:hover::before,
  &:hover::after {
    width: 50%;
  }

  &::before {
    left: 0;
    top: 0;
  }

  &::after {
    right: 0;
    bottom: 0;
  }
`;
export const LinkContainer = styled.div`
  ${flex({ justifyContent: "space-between" })}
  margin: 1.5rem 0 0;

  ${mobile({ flexDirection: "column", gap: "0.3rem" })}
`;
export const Link = styled.a`
  font-size: 0.9rem;
  color: #eec9ca;
  &:hover {
    color: #e48b92;
  }
`;
