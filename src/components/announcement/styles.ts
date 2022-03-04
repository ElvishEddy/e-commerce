import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.teal};
  height: 30px;
  line-height: 30px;
  font-weight: 500;
  font-size: 0.875rem;
`;
