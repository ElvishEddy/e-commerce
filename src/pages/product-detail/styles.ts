import styled from "styled-components";

import { mobile, flex } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  padding: 3em 2em;
  ${mobile({
    flexDirection: "column",
    padding: "10px",
  })}
`;

export const ImageProduct = styled.div`
  flex: 1;
  ${flex({ alignItems: "center", justifyContent: "center" })}
  margin: 1em;
  background-color: #e1f2f7;

  ${mobile({ margin: "10px" })}

  img {
    ${mobile({ width: "100%" })}
  }
`;

export const Info = styled.div`
  flex: 1;
  margin: 1em;

  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 15px;
    ${mobile({ fontSize: "1.5rem" })}
  }

  h2::selection {
    color: ${({ theme }) => theme.colors.teal};
    background-color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-weight: 500;
    font-size: 1.1rem;
    width: 80%;
    ${mobile({ width: "100%", fontSize: "0.95rem" })}
  }

  ${mobile({ margin: "10px" })};
`;

export const Price = styled.span`
  font-size: 3rem;
  font-weight: 200;
  margin: 20px 0;
  display: inline-block;

  ${mobile({ fontSize: "1.8rem", margin: "10px 0" })}
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 30px;
  ${mobile({ justifyContent: "space-between", marginBottom: "20px" })}
`;

export const Filter = styled.div`
  ${flex({ alignItems: "center" })}
  gap: 0.5rem;

  select {
    padding: 0.3em 0.5em;
    ${mobile({ padding: "0.1em 0.2em" })}
  }
`;

export const FilterTitle = styled.span`
  font-size: 1.3rem;
  ${mobile({ fontSize: "1.1rem" })}
`;

export const ColorOption = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  ${mobile({ width: "15px", height: "15px" })}
`;

export const AddContainer = styled.div`
  display: flex;
  gap: 5rem;
  ${mobile({ justifyContent: "space-between" })}
`;

export const AmountContainer = styled.div`
  ${flex({ alignItems: "center" })}
  gap: 1em;
  ${mobile({ gap: "0.5em" })}
`;

export const Amount = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.2em 0.8em;
  border: 1px solid ${({ theme }) => theme.colors.teal};
  border-radius: 10px;
  ${mobile({ fontSize: "1rem" })}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.teal};
  padding: 0.5em 0.8em;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
  }
  ${mobile({ padding: "0.3em 0.6em" })}
`;
