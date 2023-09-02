import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';

import useSingleTickerWebSocket from '@/hooks/useSingleTickerWebSocket';
import {
  convertToNumberLocale,
  convertToPercentage,
  parseSocketMessage,
} from '@/utils';

import { useAllMarketValue } from '@/atoms/marketAtom';
import { useOrderbookCodeValue } from '@/atoms/orderbookAtom/orderbookCodeAtom';

import { LogoImage } from '../common';

import type { TTicker } from '@/types';
import * as S from './TickerDetail.styled';

function TickerDetail() {
  const [tickerDetail, setTickerDetail] = useState<TTicker>();

  const { lastMessage } = useSingleTickerWebSocket();
  const code = useOrderbookCodeValue();
  const allMarketInfo = useAllMarketValue();

  const cryptoInfo = useMemo(() => {
    const marketInfo = allMarketInfo[code as string];
    const krName = marketInfo?.korean_name;
    const enName = marketInfo?.english_name;
    const [currency, coinName] = (marketInfo?.market || '').split('-');

    return {
      krName,
      enName,
      currency,
      coinName,
    };
  }, [code, allMarketInfo]);

  useEffect(() => {
    parseSocketMessage(lastMessage)
      .then((data: TTicker) => setTickerDetail(data))
      .catch(console.error);
  }, [lastMessage]);

  const {
    trade_price,
    signed_change_price,
    signed_change_rate,
    high_price,
    low_price,
    acc_trade_price_24h,
    acc_trade_volume_24h,
    change,
  } = tickerDetail || {};

  const isPositive = change === 'RISE';
  const isNegative = change === 'FALL';

  return (
    <S.TickerDetailWrapper>
      <S.LogoWrapper>
        {cryptoInfo.coinName && (
          <LogoImage name={cryptoInfo.coinName} size={55} />
        )}

        <S.NameWrapper>
          <p>{cryptoInfo.krName}</p>
          <p>{cryptoInfo.enName}</p>
        </S.NameWrapper>
      </S.LogoWrapper>

      <S.TransactionInfo>
        <div className="comparison-price-wrapper">
          <p
            className={clsx([
              'price',
              { positive: isPositive },
              { negative: isNegative },
            ])}
          >
            {convertToNumberLocale(trade_price)} {cryptoInfo.currency}
          </p>

          <div
            className={clsx([
              'prev-container',
              { positive: isPositive },
              { negative: isNegative },
            ])}
          >
            전일대비:
            <p>{convertToPercentage(signed_change_rate)}</p>
            <p>
              {convertToNumberLocale(signed_change_price)} {cryptoInfo.currency}
            </p>
          </div>
        </div>

        <div className="transaction-value-wrapper">
          <div>
            <p>고가</p>
            <p>{convertToNumberLocale(high_price)}</p>
          </div>

          <div>
            <p>거래량(24H)</p>
            <p>{convertToNumberLocale(acc_trade_volume_24h)}</p>
          </div>

          <div>
            <p>저가</p>
            <p>{convertToNumberLocale(low_price)}</p>
          </div>

          <div>
            <p>거래대금(24H)</p>
            <p>{convertToNumberLocale(acc_trade_price_24h)}</p>
          </div>
        </div>
      </S.TransactionInfo>
    </S.TickerDetailWrapper>
  );
}

export default TickerDetail;
