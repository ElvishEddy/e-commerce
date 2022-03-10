import styled from "styled-components";

import { mobile } from "../../styles";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "1.5rem",
    marginBottom: "10px",
    padding: "0",
    textAlign: "center",
  })}
`;

export const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterType = styled.div`
  select {
    margin-right: 30px;
    padding: 0.3em 0.5em;
    ${mobile({ margin: "8px", padding: "0.2em 0.4em" })}
  }
`;

export const FilterName = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 20px;
  display: inline-block;
  ${mobile({ fontSize: "1.1rem", margin: "10px" })}
`;
