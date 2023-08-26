import useTickerWebSocket from "@/hooks/useTickerWebSocket";

import TickerBoard from "@/components/TickerBoard";

import * as S from "./styled";
import Orderbook from "@/components/Orderbook/Orderbook";

function Main() {
  return (
    <S.MainPageWrapper>
      <div className="mid-container">
        <div className="orderbook-container">
          <Orderbook />
        </div>

        <div className="make-order-container">준비중입니다.</div>
      </div>

      <TickerBoard />
    </S.MainPageWrapper>
  );
}

export default Main;
