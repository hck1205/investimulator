import { memo } from 'react';
import { TradePriceWrapper } from './TradePrice.styled';
import { convertToNumberLocale } from '@/utils';

type TProps = {
  tradePrice: number;
};

function TradePrice(props: TProps) {
  const { tradePrice } = props;

  return (
    <TradePriceWrapper>{convertToNumberLocale(tradePrice)}</TradePriceWrapper>
  );
}

export default memo(TradePrice);
