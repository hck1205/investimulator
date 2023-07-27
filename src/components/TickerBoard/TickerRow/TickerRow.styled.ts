import styled from '@emotion/styled';

import { GREEN, RED } from '@/designSystem';

export const TickerRow = styled.tr`
  &.negative {
    animation: red-blinker 0.6s step-start;
  }

  &.positive {
    animation: green-blinker 0.5s step-start;
  }

  @keyframes red-blinker {
    100% {
      box-shadow: 0 0 0 2px ${RED(50)} inset;
    }
  }

  @keyframes green-blinker {
    100% {
      box-shadow: 0 0 0 2px ${GREEN(50)} inset;
    }
  }

  td {
    text-align: end;
    height: 55px;
    font-size: 14px;

    &:first-of-type,
    &:last-of-type {
      padding: 0 3px;
    }

    @media (max-width: 700px) {
      font-size: 12px;
    }
  }
`;
