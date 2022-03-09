import styled from "styled-components";

import { mobile } from "../../styles";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
