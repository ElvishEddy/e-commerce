import styled from "styled-components";

import { mobile, flex } from "../../styles";

export const Container = styled.div`
  display: flex;
  padding: 2.2em;
  border-top: 1px solid #eee;
  ${mobile({
    flexDirection: "column",
    textAlign: "center",
    padding: "20px 10px",
  })}
`;
export const Left = styled.div`
  flex: 1;
  padding: 1rem;

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
  }

  p {
    line-height: 1.6;
    margin-bottom: 30px;
  }

  ${mobile({ padding: "10px 0" })}
`;

export const SocialMediaIconGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  ${mobile({ justifyContent: "center" })}
`;
export const Icon = styled.span`
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  ${flex({ justifyContent: "center", alignItems: "center" })};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
export const Center = styled.div`
  flex: 1;
  padding: 1rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 700;
  }
  ${mobile({ padding: "10px 0" })}
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
  padding: 1rem;

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
  ${mobile({ padding: "10px 0" })}
`;
