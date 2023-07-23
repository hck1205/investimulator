import clsx from 'clsx';
import { memo, useMemo } from 'react';
import { StarOutlined } from '@ant-design/icons';

import { LogoImage } from '@/components/common';
import { useAllMarketValue } from '@/atoms/upbitAtom';
import { convertToNumberLocale, convertToPercentage } from '@/utils';

import * as S from './TickerRow.styled';

import type { TTicker } from '@/types';

const toggleBlink = setTimeout(() => {
  return;
}, 0);

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

  const [koreanName, currency, coinName] = useMemo(() => {
    const marketInfo = allMarketInfo[code];
    const krName = marketInfo.korean_name;
    const [currency, coinName] = marketInfo.market.split('-');

    return [krName, currency, coinName];
  }, [code]);

  const getStatusClassName = (value: number) => {
    return clsx({
      positive: value > 0,
      negative: value < 0,
      neutral: value === 0,
    });
  };

  const tradePrice = convertToNumberLocale(trade_price); // 현재가
  const comparisonPercentage = convertToPercentage(signed_change_rate); // 전일대비 %
  const comparisonValue = convertToNumberLocale(signed_change_price); // 전일대비
  const transactionAmount = convertToNumberLocale(acc_trade_price_24h, {
    notation: 'compact',
    maximumFractionDigits: 2,
  }); // 거래액(일)

  return (
    <S.TickerRow>
      <td className="name">
        <span>
          <LogoImage name={coinName} text={koreanName} />
        </span>

        <span className={clsx(['favourite', { active: false }])}>
          <StarOutlined className="star-symbol" />
          {`${coinName}/${currency}`}
        </span>
      </td>

      <td>{tradePrice}</td>

      <td className="prev-comparison">
        <span className={getStatusClassName(signed_change_rate)}>
          {comparisonPercentage}
        </span>

        <span className={getStatusClassName(signed_change_price)}>
          {comparisonValue}
        </span>
      </td>

      <td>{transactionAmount}</td>
    </S.TickerRow>
  );
}

export default memo(TickerRow);
