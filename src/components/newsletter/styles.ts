import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPink};
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 400;
  }
`;
export const InputEmail = styled.div`
  display: flex;
  width: 40%;
  height: 40px;

  input {
    font-size: 1.1rem;
  }
`;
export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  padding: 0.2em 1.5em;
  font-size: 1.2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
