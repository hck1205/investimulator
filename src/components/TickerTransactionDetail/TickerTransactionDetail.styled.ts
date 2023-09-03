import { GREEN, RED } from "@/designSystem";
import styled from "@emotion/styled";

export const TickerDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionInfo = styled.div`
  box-sizing: border-box;
  gap: 10px;

  .comparison-price-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      font-size: 22px;
    }

    .prev-container {
      display: flex;
      gap: 15px;
      font-size: 22px;
    }

    .positive {
      color: ${GREEN(50)};
    }

    .negative {
      color: ${RED(50)};
    }
  }

  .transaction-value-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 30px;
    font-size: 16px;
    margin: 25px 0;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
  }
`;
