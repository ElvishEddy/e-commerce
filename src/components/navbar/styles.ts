import styled from "styled-components";

import { mobile, flex } from "../../styles";

export const Container = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })};
  margin: 12px 20px;
  ${mobile({ margin: "10px" })}
`;

export const Left = styled.div`
  ${flex({ alignItems: "center" })};

  p {
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
    ${mobile({ display: "none" })}
  }

  ${mobile({ width: "160px" })}
`;

export const SearchContainer = styled.div`
  ${flex({ alignItems: "center" })};
  min-width: 280px;
  ${mobile({ minWidth: "160px" })}
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
    ${flex({ justifyContent: "center", alignItems: "center" })};
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
