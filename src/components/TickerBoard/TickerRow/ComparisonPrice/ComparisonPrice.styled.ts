import { GREEN, RED, WHITE } from '@/designSystem';
import styled from '@emotion/styled';

export const ComparisonPriceWrapper = styled('td')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;

  .negative {
    color: ${RED(50)};
  }

  .positive {
    color: ${GREEN(50)};
  }

  .neutral {
    color: ${WHITE(100)};
  }
`;
