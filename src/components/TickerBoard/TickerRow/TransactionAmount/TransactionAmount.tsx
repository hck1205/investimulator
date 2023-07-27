import { memo } from 'react';
import { convertToNumberLocale } from '@/utils';
import { TransactionAmountWrapper } from './TransactionAmount.styled';

type TProps = {
  accTradePrice24h: number;
};

function TransactionAmount(props: TProps) {
  const { accTradePrice24h } = props;

  const transactionAmount = convertToNumberLocale(accTradePrice24h, {
    notation: 'compact',
    maximumFractionDigits: 2,
  }); // 거래액(일)

  return (
    <TransactionAmountWrapper>{transactionAmount}</TransactionAmountWrapper>
  );
}

export default memo(TransactionAmount);
