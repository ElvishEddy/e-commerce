import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    
  }
  
  html,
  body {
    font-size: 100%;
    position: relative;
  }
  
  body {
    font-family: "Urbanist", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  
  }

  h1,h2,h3,h4,h5,h6,p {
    margin:0;
    padding:0;
  }
  
  ul,
  li,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    color: unset;
    text-decoration: none;
    display: block;
  }
  
  #root {
    height: 100%;
  }  
`;
