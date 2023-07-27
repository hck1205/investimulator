import { GRAY, HOVER_STYLE } from '@/designSystem';
import styled from '@emotion/styled';

export const NameWrapper = styled('td')`
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
    text-align: left;

    &.active {
      svg > path {
        fill: yellow;
      }
    }

    .star-symbol {
      margin-right: 12px;
    }
  }
`;
