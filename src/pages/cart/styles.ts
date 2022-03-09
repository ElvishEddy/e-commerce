import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  margin: 2rem;
  height: 100%;
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextGroup = styled.div``;
export const Text = styled.span`
  text-decoration: underline;
  font-weight: 500;
  margin-right: 30px;
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
`;

export const ProductContainer = styled.div`
  display: flex;
  margin-top: 4rem;
`;
export const ProductPriceInfo = styled.div`
  flex: 3;
`;
export const ProductInfo = styled.div`
  display: flex;
  align-itmes: center;
  min-height: 50%;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TextInfo = styled.p``;
export const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #000;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  gap: 1.5rem;
`;
export const Right = styled.div``;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
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
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1rem;
`;

export const PriceText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;

  &:last-child {
    font-size: 1.6rem;
  }
  h3 {
    font-weight: 300;
  }
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
