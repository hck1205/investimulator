import { MouseEvent, memo, useEffect, useState } from "react";

import { useAllMarketValue } from "@/atoms/marketAtom";
import { useOrderbookCodeWrite } from "@/atoms/orderbookAtom/orderbookCodeAtom";

import Name from "./Name";
import TradePrice from "./TradePrice";
import ComparisonPrice from "./ComparisonPrice";
import TransactionAmount from "./TransactionAmount";

import { useCryptoDetailDrawerOpenWrite } from "@/atoms/cryptoDetailDrawerOpenAtom";

import type { TTicker } from "@/types";
import * as S from "./TickerRow.styled";

export enum STATUS {
  POSITIVE = "positive",
  NEGATIVE = "negative",
  NEUTRAL = "neutral",
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
  const setOrderbookCode = useOrderbookCodeWrite();
  const setIsDrawerOpen = useCryptoDetailDrawerOpenWrite();

  const handleClickRowEvent = (event: MouseEvent<HTMLTableRowElement>) => {
    if (event.target instanceof HTMLElement) {
      const targetClassName = event.target.className;

      if (targetClassName === "favourite") {
        // TODO
        // SAVE localStorage
      } else {
        setOrderbookCode(code);
        setIsDrawerOpen(true);
      }
    }

    return;
  };

  return (
    <S.TickerRow onClick={handleClickRowEvent}>
      {/* 네임 */}
      <Name marketInfo={allMarketInfo[code]} />

      {/* 현재가 */}
      <TradePrice
        id={code}
        signed_change_price={signed_change_price}
        tradePrice={trade_price}
      />

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
