import styled from "@emotion/styled";

import { GREEN, RED } from "@/designSystem";

export const TickerRow = styled.tr`
  cursor: pointer;
  padding: 0 20px;
  box-sizing: border-box;

  &:hover {
    background-color: #2c2c2c;
  }

  td {
    text-align: end;
    height: 55px;
    font-size: 14px;

    &:first-of-type,
    &:last-of-type {
      padding: 0 20px;
    }

    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;
