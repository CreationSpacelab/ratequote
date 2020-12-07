import styled from "styled-components";

import { fadeIn } from "../core/animation";
import { theme } from "../core/colors";

export const Column = styled.div`
  flex: 1;
  margin: 16px auto;
  max-width: 16.6667%;
  padding: 0 16px;
`;

export const LenderName = styled(Column)`
  overflow-x: scroll;
  white-space: nowrap;
`;

export const RateQuoteRow = styled.div`
  border-bottom: 1px solid ${theme.lightgray};
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  margin: 0 auto;
  padding: 16px 8px;
  position: relative;
  animation: ${fadeIn} 450ms ease-in forwards;
`;

export const TableHeaderRow = styled(RateQuoteRow)`
  padding: 8px;
  animation: none;

  ${Column} {
    color: ${theme.gray};
    font-size: 14px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
`;

export const ToolTip = styled.div`
  display: inline-block;
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    > div {
      visibility: visible;
    }
  }
  div {
    background-color: ${theme.blue};
    border-radius: 3px;
    display: block;
    color: ${theme.white};
    font-size: 13px;
    padding: 12px;
    position: absolute;
    left: 20px;
    bottom: -10px;
    text-align: center;
    visibility: hidden;
    width: fit-content;
    z-index: 1000;
  }
`;
