import { useEffect, useState } from "react";
import clsx from "clsx";

import useSingleTickerWebSocket from "@/hooks/useSingleTickerWebSocket";
import useCryptoInfo from "@/hooks/useCryptoInfo";

import {
  convertToNumberLocale,
  convertToPercentage,
  parseSocketMessage,
} from "@/utils";

import type { TTicker } from "@/types";
import * as S from "./TickerTransactionDetail.styled";

function TickerTransactionDetail() {
  const [tickerDetail, setTickerDetail] = useState<TTicker>();

  const { lastMessage } = useSingleTickerWebSocket();
  const { currentCryptoInfo: cryptoInfo } = useCryptoInfo();

  useEffect(() => {
    parseSocketMessage(lastMessage)
      .then((data: TTicker) => setTickerDetail(data))
      .catch(console.error);
  }, [lastMessage]);

  const formatValue = ({
    value,
    suffix = cryptoInfo.currency,
    type = "number",
  }: {
    value: number;
    suffix?: string;
    type?: "number" | "rate";
  }) => {
    const isRate = type === "rate";

    const formattedValue = isRate
      ? convertToPercentage(value)
      : convertToNumberLocale(value);

    return `${formattedValue} ${isRate ? "" : suffix}`;
  };

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

  const isPositive = change === "RISE";
  const isNegative = change === "FALL";

  return (
    <S.TickerDetailWrapper>
      <S.TransactionInfo>
        <div className="comparison-price-wrapper">
          <p
            className={clsx([
              "price",
              { positive: isPositive },
              { negative: isNegative },
            ])}
          >
            {formatValue({ value: trade_price })}
          </p>

          <div
            className={clsx([
              "prev-container",
              { positive: isPositive },
              { negative: isNegative },
            ])}
          >
            전일대비:
            <p>{formatValue({ value: signed_change_rate, type: "rate" })}</p>
            <p>{formatValue({ value: signed_change_price })}</p>
          </div>
        </div>

        <div className="transaction-value-wrapper">
          <div>
            <p>고가</p>
            <p>
              {convertToNumberLocale(high_price)} {cryptoInfo.currency}
            </p>
          </div>

          <div>
            <p>거래량(24H)</p>
            <p>
              {formatValue({
                value: acc_trade_volume_24h,
                suffix: cryptoInfo.coinName,
              })}
            </p>
          </div>

          <div>
            <p>저가</p>
            <p>{formatValue({ value: low_price })}</p>
          </div>

          <div>
            <p>거래대금(24H)</p>
            <p>{formatValue({ value: acc_trade_price_24h })}</p>
          </div>
        </div>
      </S.TransactionInfo>
    </S.TickerDetailWrapper>
  );
}

export default TickerTransactionDetail;
