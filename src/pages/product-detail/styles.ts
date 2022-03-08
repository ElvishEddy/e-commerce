import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 3em 2em;
`;
export const ImageProduct = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  background-color: #e1f2f7;
`;
export const Info = styled.div`
  flex: 1;
  margin: 1em;
  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 15px;
  }

  p {
    font-weight: 500;
    font-size: 1.1rem;
    width: 80%;
  }
`;

export const Price = styled.span`
  font-size: 3rem;
  font-weight: 200;
  margin: 20px 0;
  display: inline-block;
`;

export const FilterGroup = styled.div`
  display: flex;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 50px 30px 0;

  select {
    padding: 0.3em 0.5em;
  }
`;

export const FilterTitle = styled.span`
  font-size: 1.3rem;
`;

export const ColorOption = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
export const AddContainer = styled.div`
  display: flex;
  gap: 5rem;
`;

export const AmountContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;
export const Amount = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.2em 0.8em;
  border: 1px solid ${({ theme }) => theme.colors.teal};
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.teal};
  padding: 0.5em 0.8em;
  cursor: pointer;
`;
