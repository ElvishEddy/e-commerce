import { css } from "styled-components";

interface IFlex {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
}

export const flex = ({
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
}: IFlex) => {
  return css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
  `;
};
