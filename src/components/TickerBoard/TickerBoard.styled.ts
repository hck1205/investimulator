import { BLUE, GRAY } from "@/designSystem";
import styled from "@emotion/styled";

export const TableBoardWrapper = styled.div``;

export const MarketTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  thead {
    height: 50px;
    font-size: 16px;

    @media (max-width: 800px) {
      font-size: 12px;
    }

    tr {
      box-shadow: inset 0 -1px 0 0 ${BLUE(30)};

      th {
        border: unset;
        text-align: end;
        color: ${GRAY(50)};

        &.name {
          text-align: start;
        }

        &:first-of-type,
        &:last-of-type {
          padding: 0 20px;
        }
      }

      td {
        overflow: hidden;
      }
    }
  }
`;
