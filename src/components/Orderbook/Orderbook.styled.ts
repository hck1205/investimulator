import styled from "@emotion/styled";

export const OrderbookWrapper = styled.div`
  max-height: 500px;
  overflow-y: auto;

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

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const OrderbookContainer = styled.div`
  width: 100%;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #474a53;

    h3 {
      font-size: 16px;
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
