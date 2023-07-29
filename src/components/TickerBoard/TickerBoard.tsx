import TickerRow from "./TickerRow";
import useTickerWebSocket from "@/hooks/useTickerWebSocket";
import { useCurrentAllTickerInfoValue } from "@/atoms/ticketPriceAtom";

import * as S from "./TickerBoard.styled";

import type { TTicker } from "@/types";

function TickerBoard() {
  useTickerWebSocket();
  const currentAllTickerList = useCurrentAllTickerInfoValue();

  return (
    <S.TableBoardWrapper>
      {currentAllTickerList.length && (
        <S.MarketTable>
          <colgroup>
            <col id="name" width={20} />
            <col id="current-value" width={20} />
            <col id="prev-comparison" width={10} />
            <col id="transaction-amount" width={30} />
          </colgroup>

          <thead>
            <tr>
              <th className="name">이름</th>
              <th className="current-value">현재가</th>
              <th className="prv-comparison">전일대비</th>
              <th className="transaction-amount">거래액(일)</th>
            </tr>
          </thead>

          <tbody>
            {currentAllTickerList.map((ticker: TTicker, index) => (
              <TickerRow key={ticker.code} no={index} ticker={ticker} />
            ))}
          </tbody>
        </S.MarketTable>
      )}
    </S.TableBoardWrapper>
  );
}

export default TickerBoard;
