import { GRAY, WHITE } from "@/designSystem";
import styled from "@emotion/styled";

// import { FLEX_LEFT, WHITE } from "@/styles";

export const LayoutWrapper = styled.div`
  height: 100%;

  .app-content {
    height: 100%;
    background-color: ${GRAY(100)};
    color: ${WHITE(100)};
    overflow: auto;
  }
`;
