import { memo, useMemo } from "react";
import { convertToNumberLocale } from "@/utils";
import * as S from "./OrderbookRow.styled";

type TProps = {
  ask_price: number; // 38674000;
  ask_size: number; // 0.0195104;
  bid_price: number; // 38624000;
  bid_size: number; // 0.05178127;
  no: number;
  code: string;
};

function OrderbookRow(props: TProps) {
  const { ask_price, ask_size, bid_price, bid_size, no, code } = props;

  const { currency, coinName } = useMemo(() => {
    const [currency, coinName] = code.split("-");
    return { currency, coinName };
  }, [code]);

  return (
    <>
      <S.OrderbookRow order={no} className="buy-quantity">
        <div id="ask-size">
          {ask_size.toFixed(4)} {coinName}
        </div>
        <div id="ask-price">
          {convertToNumberLocale(ask_price)} {currency}
        </div>
        <div />
      </S.OrderbookRow>

      <S.OrderbookRow order={no * -1} className="sell-quantity">
        <div />
        <div id="bid-price">
          {convertToNumberLocale(bid_price)} {currency}
        </div>
        <div id="bid-size">
          {bid_size.toFixed(4)} {coinName}
        </div>
      </S.OrderbookRow>
    </>
  );
}

export default memo(OrderbookRow);
