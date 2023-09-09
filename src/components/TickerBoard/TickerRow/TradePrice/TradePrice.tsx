import { memo, useEffect, useState } from "react";
import { convertToNumberLocale } from "@/utils";

import { STATUS } from "../TickerRow";

import { TradePriceWrapper } from "./TradePrice.styled";

type TProps = {
  code: string;
  tradePrice: number;
  signed_change_price: number;
};

function TradePrice(props: TProps) {
  const { tradePrice, code, signed_change_price } = props;

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
    const priceTd = document.getElementById(code);

    if (priceTd) {
      const { status } = currentStatus;
      priceTd.classList.add(status);

      setTimeout(() => {
        priceTd.classList.remove(status);
      }, 500);
    }
  }, [currentStatus]);

  return (
    <TradePriceWrapper id={code}>
      <div>{convertToNumberLocale(tradePrice)}</div>
    </TradePriceWrapper>
  );
}

export default memo(TradePrice);
