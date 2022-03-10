import styled from "styled-components";

import { mobile, flex } from "../../styles";

export const Container = styled.div`
  padding: 20px;
  ${flex({ justifyContent: "space-between", flexWrap: "wrap" })};
  ${mobile({ padding: "10px" })}
`;
