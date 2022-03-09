import styled from "styled-components";

import { mobile } from "../../styles";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 20px;
  ${mobile({ margin: "15px" })}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
    ${mobile({ display: "none" })}
  }

  ${mobile({ width: "180px" })}
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 280px;
  ${mobile({ minWidth: "180px" })}
`;

export const Center = styled.div`
  h1 {
    font-weight: 900;
    font-size: 30px;
    margin-right: 100px;

    ${mobile({ fontSize: "16px", margin: "0" })};
  }
`;

export const Right = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
  }

  li {
    margin: 0 10px;
    ${mobile({ margin: "3px" })};

    a {
      ${mobile({ fontSize: "12px" })};
    }
  }
`;
