import { memo, useEffect, useState } from 'react';

import { useAllMarketValue } from '@/atoms/upbitAtom';

import Name from './Name';
import TradePrice from './TradePrice';
import ComparisonPrice from './ComparisonPrice';
import TransactionAmount from './TransactionAmount';

import type { TTicker } from '@/types';
import * as S from './TickerRow.styled';

export enum STATUS {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
  NEUTRAL = 'neutral',
}

type TProps = {
  ticker: TTicker;
  no: number;
};

function TickerRow({ ticker }: TProps) {
  const {
    code,
    trade_price,
    signed_change_rate,
    signed_change_price,
    acc_trade_price_24h,
  } = ticker;

  const allMarketInfo = useAllMarketValue();
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentStatus, setCurrentStatus] = useState({
    status: STATUS.NEUTRAL, // -1: negative, 0: neutral, 1: positive
  });

  useEffect(() => {
    if (currentPrice === 0) {
      setCurrentPrice(signed_change_price);
    } else {
      if (signed_change_price === currentPrice) {
        setCurrentStatus({ status: STATUS.NEUTRAL });
      } else {
        const isPositive = signed_change_price > currentPrice;
        const status = isPositive ? STATUS.POSITIVE : STATUS.NEGATIVE;
        setCurrentStatus({ status });
        setCurrentPrice(signed_change_price);
      }
    }
  }, [signed_change_price]);

  useEffect(() => {
    const row = document.getElementById(code);

    if (row) {
      const { status } = currentStatus;
      row.classList.add(status);

      setTimeout(() => {
        row.classList.remove(status);
      }, 1000);
    }
  }, [currentStatus]);

  return (
    <S.TickerRow id={code}>
      {/* 네임 */}
      <Name marketInfo={allMarketInfo[code]} />

      {/* 현재가 */}
      <TradePrice tradePrice={trade_price} />

      {/* 전일대비 */}
      <ComparisonPrice
        signedChangePrice={signed_change_price}
        signedChangeRate={signed_change_rate}
      />

      {/* 거래액 */}
      <TransactionAmount accTradePrice24h={acc_trade_price_24h} />
    </S.TickerRow>
  );
}

export default memo(TickerRow);
