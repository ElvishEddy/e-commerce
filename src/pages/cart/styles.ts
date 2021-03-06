import styled from "styled-components";

import { flex, mobile } from "../../styles";

export const Container = styled.div``;
export const Wrapper = styled.div`
  margin: 2rem;
  height: 100%;
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 500;

    ${mobile({ fontSize: "1.5rem" })}
  }

  ${mobile({ margin: "20px" })}
`;

export const Info = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}
`;

export const TextGroup = styled.div``;
export const Text = styled.span`
  text-decoration: underline;
  font-weight: 500;
  margin-right: 30px;
  ${mobile({ display: "none" })}
`;
export const Button = styled.a`
  font-size: 0.9rem;
  padding: 0.8rem 1rem;
  font-weight: 600;
  position: relative;
  color: #333;
  letter-spacing: 2px;
  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }
  span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 2px;
    background-color: #888;
    transition: all 0.5s ease;
  }

  span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 50%;
    background-color: #888;
    transition: all 0.5s ease;
  }

  span:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2px;
    height: 50%;
    background-color: ${({ theme }) => theme.colors.teal};
    transition: all 0.5s ease;
  }

  span:nth-child(4) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.teal};
    transition: all 0.5s ease;
  }

  &:hover span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #888;
  }

  &:hover span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: #888;
  }

  &:hover span:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.teal};
  }

  &:hover span:nth-child(4) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.teal};
  }

  &:last-child {
    text-align: center;
  }

  ${mobile({ padding: "0.6em 1em", letterSpacing: "0" })}
`;

export const ProductContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  ${mobile({ marginTop: "2.5rem", flexDirection: "column" })}
`;
export const ProductPriceInfo = styled.div`
  flex: 3;
`;
export const ProductInfo = styled.div`
  ${flex({ alignItems: "center" })}
  min-height: 50%;

  ${mobile({ margin: "10px 0", gap: "1rem" })}
`;
export const Image = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const TextDes = styled.div`
  flex: 4;
  ${flex({ justifyContent: "space-around", alignItems: "center" })}
  ${mobile({ flexDirection: "column", flex: "1" })}
`;

export const TextInfo = styled.p``;
export const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #000;
`;

export const Left = styled.div`
  ${flex({ flexDirection: "column" })}
  font-size: 1.2rem;
  gap: 1.5rem;
  ${mobile({ gap: "0.5rem", fontSize: "1rem" })}
`;
export const Right = styled.div`
  ${mobile({ textAlign: "center", marginRight: "30px;" })}
`;

export const AmountContainer = styled.div`
  ${flex({ alignItems: "center" })}
`;
export const Amount = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.2em 0.8em;
`;
export const Price = styled.span`
  font-size: 2rem;
  font-weight: 200;
  margin: 20px 0;
  display: inline-block;
  ${mobile({ margin: "0", fontSize: "1.5rem" })}
`;

export const Summary = styled.div`
  flex: 1;
  padding: 1.5rem;
  border: 1px solid #eee;
  height: 50%;
  border-radius: 10px;

  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    ${mobile({ fontSize: "1.5rem" })}
  }
  ${mobile({ padding: "15px" })}
`;

export const PriceContainer = styled.div`
  ${flex({ flexDirection: "column" })}
  gap: 1.2rem;
  margin-bottom: 1rem;
  ${mobile({ gap: "0.3rem" })}
`;

export const PriceText = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}
  font-size: 1.1rem;
  font-weight: 500;

  &:last-child {
    font-size: 1.6rem;
  }
  h3 {
    font-weight: 300;
    ${mobile({ fontSize: "1.5rem" })}
  }

  ${mobile({ fontSize: "1rem" })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
