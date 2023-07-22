import { FLEX_COLUMN, FLEX_COLUMN_EVEN, HOVER_STYLE } from "@/designSystem";
import styled from "@emotion/styled";

export const TickerRow = styled.tr`
  .blink {
    animation: blinker 0.5s step-start;
  }

  @keyframes blinker {
    50% {
      background-color: green;
    }
  }

  td {
    text-align: center;
    height: 55px;
    font-size: 14px;

    @media (max-width: 700px) {
      font-size: 12px;
    }
  }

  .favourite {
    ${HOVER_STYLE}

    &.active {
      svg > path {
        fill: yellow;
      }
    }
  }

  .name {
    ${FLEX_COLUMN_EVEN};
    word-break: break-all;
  }

  .prev-comparison {
    ${FLEX_COLUMN_EVEN}
  }
`;
