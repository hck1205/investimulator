import styled from '@emotion/styled';

export const OrderbookRow = styled.tr<{ order: number }>`
  order: ${({ order }) => order};

  .price-wrapper {
    display: flex;
    gap: 20px;
  }
`;
