import { GRAY } from "@/designSystem";
import styled from "@emotion/styled";

export const CloseIconWrapper = styled.div`
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: ${GRAY(50)};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
