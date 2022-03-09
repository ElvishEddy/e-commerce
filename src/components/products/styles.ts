import styled from "styled-components";

import { mobile } from "../../styles";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "10px" })}
`;
