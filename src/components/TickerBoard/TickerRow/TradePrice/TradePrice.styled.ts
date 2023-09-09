import { GREEN, RED } from "@/designSystem";
import styled from "@emotion/styled";

export const TradePriceWrapper = styled("td")`
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
`;
