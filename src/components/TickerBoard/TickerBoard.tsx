import { useCurrentAllTickerInfoValue } from '@/atoms/ticketPriceAtom';
import TickerRow from './TickerRow';

import * as S from './TickerBoard.styled';

import type { TTicker } from '@/types';

function TickerBoard() {
  const currentAllTickerList = useCurrentAllTickerInfoValue();

  return (
    <S.TableBoardWrapper>
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
            <TickerRow no={index} key={ticker.code} ticker={ticker} />
          ))}
        </tbody>
      </S.MarketTable>
    </S.TableBoardWrapper>
  );
}

export default TickerBoard;
