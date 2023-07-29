import { TOrderbookUnit } from "@/types";
import * as S from "./OrderbookRow.styled";

type TProps = {
  orderbookUnit: TOrderbookUnit;
};

function OrderbookRow({ orderbookUnit }: TProps) {
  const { ask_price, ask_size, bid_price, bid_size } = orderbookUnit;

  console.log("orderbookUnit", orderbookUnit);

  return (
    <S.OrderbookRow>
      <div>{ask_price}</div>
      <div>{ask_size}</div>
      <div>{bid_price}</div>
      <div>{bid_size}</div>
    </S.OrderbookRow>
  );
}

export default OrderbookRow;
