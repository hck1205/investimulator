import { FLEX_CENTER, FLEX_LEFT } from "@/designSystem";
import styled from "@emotion/styled";

export const LoginPageWrapper = styled.div`
  ${FLEX_CENTER}
  flex-direction: column;
  height: 100%;
`;

export const ButtonsWrapper = styled.div`
  list-style: none;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .common-buttons {
    ${FLEX_CENTER}

    max-width: 350px;
    width: 75vw;
    margin: auto;

    &.google {
      display: flex;
      justify-content: start;
    }

    img {
      width: 40px;
      height: 40px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding-right: 10px;
    }
  }
`;
