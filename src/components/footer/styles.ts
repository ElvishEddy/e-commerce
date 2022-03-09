import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2.2em;
  border-top: 1px solid #eee;
`;
export const Left = styled.div`
  flex: 1;

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    width: 80%;
    line-height: 1.6;
    margin-bottom: 30px;
  }
`;
export const SocialMediaIconGroup = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const Icon = styled.span`
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
export const Center = styled.div`
  flex: 1;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 700;
  }
`;

export const LinkContainer = styled.div`
  display: flex;

  li {
    margin-bottom: 8px;
  }
`;

export const LinkLists = styled.ul`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  span {
    margin-right: 5px;
  }

  p {
    margin-bottom: 15px;
    font-weight: 500;
  }
`;
