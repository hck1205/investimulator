import { GREEN, RED } from "@/designSystem";
import styled from "@emotion/styled";

export const TickerDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const TransactionInfo = styled.div`
  box-sizing: border-box;
  gap: 10px;

  .comparison-price-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      font-size: 20px;
    }

    .prev-container {
      display: flex;
      gap: 10px;
      font-size: 15px;
      align-items: center;

      p {
        font-size: 20px;
      }
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
    font-size: 15px;
    margin: 25px 0;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
  }
`;
