import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 20px;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
  }
`;
export const Center = styled.div`
  h1 {
    font-weight: 900;
    font-size: 30px;
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
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
