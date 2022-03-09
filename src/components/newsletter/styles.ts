import styled from "styled-components";

import { mobile } from "../../styles";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPink};
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 10px;
    ${mobile({ fontSize: "2.2rem" })}
  }

  p {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 400;
    ${mobile({ fontSize: "1.1rem" })}
  }
`;
export const InputEmail = styled.div`
  display: flex;
  width: 40%;
  height: 40px;

  input {
    font-size: 1.1rem;
  }

  ${mobile({ width: "80%", height: "35px" })}
`;
export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  padding: 0.2em 1.5em;
  font-size: 1.2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  ${mobile({ fontSize: "1.2rem", padding: "0.1em 1em" })}
`;
