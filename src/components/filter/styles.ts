import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterType = styled.div`
  select {
    margin-right: 20px;
    padding: 0.3em 0.5em;
  }
`;

export const FilterName = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 20px;
`;
