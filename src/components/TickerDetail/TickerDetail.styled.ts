import { GREEN, RED } from "@/designSystem";
import styled from "@emotion/styled";

export const TickerDetailWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  img {
    background-color: #fff;
    border-radius: 15px;
    padding: 10px;
    box-sizing: border-box;

    @media (max-width: 800px) {
      max-width: 60px;
      max-height: 60px;
    }
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 5px;

  p {
    font-size: 45px;
    margin-left: 5px;

    @media (max-width: 800px) {
      font-size: 35px;
    }
  }
`;

export const TransactionInfo = styled.div`
  padding: 20px;
  margin: 20px 0;
  border-top: 1px solid #898989;
  border-bottom: 1px solid #898989;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .comparison-price-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .price {
      font-size: 40px;

      @media (max-width: 800px) {
        font-size: 25px;
      }

      &.positive {
        color: ${GREEN(50)};
      }

      &.negative {
        color: ${RED(50)};
      }
    }

    .prev-container {
      display: flex;
      gap: 15px;
      font-size: 20px;

      @media (max-width: 800px) {
        font-size: 16px;
      }

      &.positive {
        color: ${GREEN(50)};
      }

      &.negative {
        color: ${RED(50)};
      }
    }
  }
`;
