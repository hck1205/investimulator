import { memo } from "react";
import { TOrderbookUnit } from "@/types";
import * as S from "./OrderbookRow.styled";
import { convertToNumberLocale } from "@/utils";

type TProps = {
  ask_price: number; // 38674000;
  ask_size: number; // 0.0195104;
  bid_price: number; // 38624000;
  bid_size: number; // 0.05178127;
  no: number;
};

function OrderbookRow(props: TProps) {
  const { ask_price, ask_size, bid_price, bid_size, no } = props;

  return (
    <>
      <S.OrderbookRow order={no} className="buy-quantity">
        <div id="ask-size">{ask_size.toFixed(4)}</div>
        <div id="ask-price">{convertToNumberLocale(ask_price)}</div>
        <div />
      </S.OrderbookRow>

      <S.OrderbookRow order={no * -1} className="sell-quantity">
        <div />
        <div id="bid-price">{convertToNumberLocale(bid_price)}</div>
        <div id="bid-size">{bid_size.toFixed(4)}</div>
      </S.OrderbookRow>
    </>
  );
}

export default memo(OrderbookRow);
