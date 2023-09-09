import { GRAY } from "@/designSystem";
import styled from "@emotion/styled";

export const OrderbookWrapper = styled.div`
  .orderbook-container {
    display: flex;
  }
`;

export const OrderbookContainer = styled.div`
  flex: 1;
  max-height: 400px;
  overflow-y: auto;
  font-size: 14px;
  border: 1px solid ${GRAY(80)};
  border-radius: 5px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #d4d8db;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #474a53;
    background-color: #474a53;
    position: sticky;
    top: 0;

    h3 {
      font-size: 15px;
      font-weight: 500;
      color: #fff;
    }
  }

  .content-container {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;
