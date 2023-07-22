import { memo, useMemo } from "react";
import clsx from "clsx";
import { StarOutlined } from "@ant-design/icons";

import * as S from "./TickerRow.styled";

import type { TTicker } from "@/types";
import { useAllMarketValue } from "@/atoms/upbitAtom";
import { convertToNumberLocale, convertToPercentage } from "@/utils";

const toggleBlink = setTimeout(() => {
  return;
}, 0);

type TProps = {
  ticker: TTicker;
  no: number;
};

function TickerRow({ ticker, no }: TProps) {
  const {
    code,
    trade_price,
    signed_change_rate,
    signed_change_price,
    acc_trade_price_24h,
  } = ticker;
  const allMarketInfo = useAllMarketValue();

  const [koreanName, _code] = useMemo(() => {
    const marketInfo = allMarketInfo[code];
    const krName = marketInfo.korean_name;
    const [coinName, currency] = marketInfo.market.split("-");

    return [krName, `${coinName}/${currency}`];
  }, [code]);

  return (
    <S.TickerRow>
      <td className={clsx(["favourite", { active: false }])}>
        <StarOutlined />
      </td>

      <td className="name">
        <span>{koreanName}</span>
        <span>{_code}</span>
      </td>

      <td>{convertToNumberLocale(trade_price)}</td>

      <td className="prev-comparison">
        <span>{convertToPercentage(signed_change_rate)}</span>
        <span>{convertToNumberLocale(signed_change_price)}</span>
      </td>

      <td>
        {convertToNumberLocale(acc_trade_price_24h, {
          notation: "compact",
          maximumFractionDigits: 2,
        })}
      </td>
    </S.TickerRow>
  );
}

export default memo(TickerRow);
