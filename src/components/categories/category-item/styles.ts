import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 8px;
  height: 70vh;
  position: relative;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    margin-bottom: 20px;
    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  Button {
    color: #555;
    cursor: pointer;
    border: none;
    padding: 10px 10px 28px;
    line-height: 1;
    font-size: 20px;
    font-weight: 600;
  }
`;
