import { BLUE, FLEX_CENTER } from "@/designSystem";
import styled from "@emotion/styled";

export const ButtonWrapper = styled.div`
  ${FLEX_CENTER}

  width: 100%;
  min-width: 50px;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;

  &.primary {
    background-color: ${BLUE(50)};
  }

  &:hover,
  &:active {
    opacity: 0.9;
  }
`;
