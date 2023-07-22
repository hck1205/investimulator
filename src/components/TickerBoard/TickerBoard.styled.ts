import styled from "@emotion/styled";

export const TableBoardWrapper = styled.div``;

export const MarketTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 0 50px;

  thead {
    height: 50px;
    font-size: 16px;

    @media (max-width: 700px) {
      font-size: 14px;
    }

    tr {
      border-bottom: 1px solid #fff;

      th {
        border: unset;
        text-align: center;
      }
    }
  }
`;
