import styled from "styled-components";

import { theme } from "../core/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  margin: 32px auto;
  padding: 32px;
`;

export const Container = styled.div`
  border: 1px solid ${theme.lightgray};
  border-radius: 4px;
  width: fit-content;
  margin: 0 auto;
  min-width: 780px;
  max-width: 1024px;
  position: relative;
  width: 100%;
`;

export const Loader = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);

  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: loaderframe 1.4s infinite cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
  }

  & {
    color: ${theme.darkgray};
    font-size: 10px;
    text-indent: -159984px;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }

  @keyframes loaderframe {
    0%,
    80%,
    100% {
      box-shadow: 0 30px 0 -20px;
    }
    40% {
      box-shadow: 0 30px 0 0;
    }
  }
`;
