import styled from "styled-components";

import { mobile, flex } from "../../styles";

export const Container = styled.div`
  padding: 20px;
  ${flex({ justifyContent: "space-between" })};
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
