import {
  FLEX_COLUMN,
  FLEX_COLUMN_CENTER,
  FLEX_COLUMN_EVEN,
  GRAY,
  GREEN,
  HOVER_STYLE,
  RED,
  WHITE,
} from '@/designSystem';
import styled from '@emotion/styled';

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
    text-align: end;
    height: 55px;
    font-size: 14px;

    @media (max-width: 700px) {
      font-size: 12px;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    word-break: break-all;
    gap: 6px;

    .favourite {
      ${HOVER_STYLE}
      font-size: 12px;
      color: ${GRAY(50)};

      &.active {
        svg > path {
          fill: yellow;
        }
      }

      .star-symbol {
        margin-right: 12px;
      }
    }
  }

  .prev-comparison {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;

    .negative {
      color: ${RED(50)};
    }

    .positive {
      color: ${GREEN(50)};
    }

    .neutral {
      color: ${WHITE(100)};
    }
  }
`;
