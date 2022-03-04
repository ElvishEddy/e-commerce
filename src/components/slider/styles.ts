import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  background-color: #fff7f7;
  border-radius: 50%;

  :first-child {
    left: 10px;
  }

  :last-child {
    right: 10px;
  }

  &:hover {
    background-color: #f2f2f2;
    opacity: 0.8;
  }
`;

export const ImageWrap = styled.div`
  height: 100%;
  flex: 1;
  img {
    height: 80%;
  }
`;
export const Info = styled.div`
  flex: 1;
  padding: 50px;

  h1 {
    font-size: 70px;
    font-weight: bold;
  }
  p {
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    font-weight: 600;
  }

  Button {
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #555;
    padding: 10px 10px 28px;
    line-height: 1;
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #fbf0f4;
`;
