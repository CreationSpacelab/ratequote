import styled, { css } from "styled-components";

import { fadeIn } from "../core/animation";
import { theme } from "../core/colors";

export const FormComponent = styled.form`
  display: flex;
  justify-content: space-between;

  margin: 0 auto 32px;
  max-width: 1024px;
  min-width: 780px;
  width: 100%;

  input,
  select {
    color: ${theme.darkgray};
    display: flex;
    border: 2px solid ${theme.lightgray};
    padding: 8px 14px;
    width: 250px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }

    &::placeholder {
      color: ${theme.gray};
      font-size: 14px;
    }
  }
`;

export const InputGroup = styled.div<{ hasDollarSize?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  position: relative;

  label {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    padding: 0 8px;
  }

  select {
    font-size: 14px;
    color: ${theme.darkgray};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  label:after {
    content: "";
    right: 12px;
    top: 14px;
    width: 0;
    height: 0;
    border-width: 10px 8px 0 8px;
    border-color: ${theme.darkgray} transparent transparent transparent;
    border-style: solid;
    position: absolute;
    pointer-events: none;
  }

  small {
    ${({ hasDollarSize }) =>
      hasDollarSize
        ? css`
            display: block;
            position: absolute;
            left: 16px;
            font-size: 16px;
          `
        : css`
            display: none;
          `}
  }

  input {
    padding-left: ${({ hasDollarSize }) => hasDollarSize && "24px"};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  span {
    color: ${theme.red};
    font-size: 12px;
    position: absolute;
    right: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background: ${theme.blue};
    border: none;
    border-radius: 4px;
    color: ${theme.white};
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 16px 0;
    padding: 20px;
    text-align: right;
    transition: background 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      background: ${theme.lightblue};
    }
    &:focus {
      background: ${theme.focusBlue};
    }
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.blue};
  animation: ${fadeIn} 450ms ease-in forwards;
  text-align: center;
  padding: 32px;
`;
