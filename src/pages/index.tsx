import useTickerWebSocket from "@/hooks/useTickerWebSocket";

import TickerBoard from "@/components/TickerBoard";

import * as S from "./styled";
import Orderbook from "@/components/Orderbook/Orderbook";

function Main() {
  return (
    <S.MainPageWrapper>
      <Orderbook />
      <TickerBoard />
    </S.MainPageWrapper>
  );
}

export default Main;
