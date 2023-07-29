import { useCallback, useEffect, useState } from "react";

import { parseSocketMessage } from "@/utils";
import useOrderbookWebSocket from "@/hooks/useOrderbookWebSocket";

import OrderbookRow from "./OrderbookRow";

import type { TOrderbook, TOrderbookUnit } from "@/types";
import * as S from "./Orderbook.styled";

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
      <S.OrderbookTable>
        <colgroup>
          <col></col>
        </colgroup>

        <thead>
          <tr>
            <th>매수량</th>
            <th>가격</th>
            <th>매도량</th>
          </tr>
        </thead>

        <tbody>
          {orderbookData &&
            orderbookData.orderbook_units.map(
              (data: TOrderbookUnit, index: number) => {
                return (
                  <OrderbookRow
                    key={`${orderbookData.code}-${orderbookData.timestamp}-${index}`}
                    orderbookUnit={data}
                  />
                );
              }
            )}
        </tbody>
      </S.OrderbookTable>
    </S.OrderbookWrapper>
  );
}

export default Orderbook;
