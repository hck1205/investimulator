import { BLUE, GREEN, RED } from "@/designSystem";
import styled from "@emotion/styled";

export const OrderbookRow = styled.li<{ order: number }>`
  order: ${({ order }) => order};
  display: flex;
  justify-content: space-around;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #717171;

  div {
    flex: 1;
    text-align: center;
    align-items: center;
  }

  #ask-size {
    color: #fff;
    background-color: rgb(18 97 196 / 40%);
  }
  #ask-price {
    color: ${BLUE(50)};
    background-color: rgb(18 97 196 / 40%);
  }

  #bid-price {
    color: #b80300;
    background-color: rgb(200 74 49 / 40%);
  }
  #bid-size {
    color: #fff;
    background-color: rgb(200 74 49 / 40%);
  }
`;
