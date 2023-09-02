import { GREEN, RED } from '@/designSystem';
import styled from '@emotion/styled';

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
    font-size: 30px;
    margin-left: 5px;

    @media (max-width: 800px) {
      font-size: 18px;
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
      font-size: 30px;

      @media (max-width: 800px) {
        font-size: 18px;
      }
    }

    .prev-container {
      display: flex;
      gap: 15px;
      font-size: 16px;

      @media (max-width: 800px) {
        font-size: 14px;
        flex-direction: column;
        gap: 5px;
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
    gap: 0px 30px;
    font-size: 16px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 8px 15px;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      @media (max-width: 800px) {
        gap: 15px;
      }
    }

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`;
