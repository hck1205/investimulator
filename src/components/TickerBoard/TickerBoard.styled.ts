import { BLUE, GRAY } from '@/designSystem';
import styled from '@emotion/styled';

export const TableBoardWrapper = styled.div``;

export const MarketTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    height: 50px;
    font-size: 16px;

    @media (max-width: 700px) {
      font-size: 14px;
    }

    tr {
      border-bottom: 1px solid ${BLUE(30)};

      th {
        border: unset;
        text-align: end;
        color: ${GRAY(50)};

        &.name {
          text-align: start;
        }
      }
    }
  }
`;
