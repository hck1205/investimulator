import { useEffect, useState } from "react";

import { parseSocketMessage } from "@/utils";
import useOrderbookWebSocket from "@/hooks/useOrderbookWebSocket";

import OrderbookRow from "@/components/Orderbook/OrderbookRow";

import * as S from "./Orderbook.styled";
import type { TOrderbook, TOrderbookUnit } from "@/types";

function Orderbook() {
  const { lastMessage } = useOrderbookWebSocket();
  const [orderbookData, setOrderbookData] = useState<TOrderbook | undefined>(
    undefined
  );

  useEffect(() => {
    if (lastMessage) {
      parseSocketMessage(lastMessage)
        .then((data) => setOrderbookData(data as TOrderbook))
        .catch(console.error);
    }
  }, [lastMessage]);

  return (
    <S.OrderbookWrapper>
      <div className="orderbook-container">
        <S.OrderbookContainer>
          <ul className="header">
            <h3>매수량</h3>
            <h3>가격</h3>
            <h3>매도량</h3>
          </ul>

          <ul className="content-container">
            {orderbookData?.orderbook_units.map(
              (data: TOrderbookUnit, index: number) => {
                return (
                  <OrderbookRow
                    key={`${orderbookData.code}-${index}`}
                    no={index + 1}
                    code={orderbookData.code}
                    {...data}
                  />
                );
              }
            )}
          </ul>
        </S.OrderbookContainer>
      </div>
    </S.OrderbookWrapper>
  );
}

export default Orderbook;
