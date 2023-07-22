import { css } from "@emotion/react";

export const DEFAULT_FLEX = css`
  display: flex;
  align-items: center;
`;

export const FLEX_CENTER = css`
  ${DEFAULT_FLEX}
  justify-content: center;
`;

export const FLEX_LEFT = css`
  ${DEFAULT_FLEX}
  justify-content: left;
`;

export const FLEX_RIGHT = css`
  ${DEFAULT_FLEX}
  justify-content: right;
`;

export const FLEX_COLUMN = css`
  ${FLEX_CENTER}
  flex-direction: column;
`;

export const FLEX_COLUMN_EVEN = css`
  ${FLEX_COLUMN}
  justify-content: space-evenly;
`;

export const HOVER_STYLE = css`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
