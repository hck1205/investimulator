import styled from "@emotion/styled";

export const OrderbookWrapper = styled.div`
  margin: 0 20px 20px 20px;

  .orderbook-container {
    display: flex;
  }

  .make-order-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OrderbookContainer = styled.div`
  flex: 1;
  max-height: 500px;
  overflow-y: auto;
  font-size: 14px;

  @media (max-width: 700px) {
    font-size: 12px;
  }

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
    position: sticky;
    top: 0%;
    background-color: #353535;

    h3 {
      font-size: 15px;
      font-weight: 500;

      @media (max-width: 700px) {
        font-size: 14px;
      }
    }
  }

  .content-container {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;
