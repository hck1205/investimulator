import TickerBoard from "@/components/TickerBoard";
import Orderbook from "@/components/Orderbook";
import CryptoChart from "@/components/CryptoChart";
import TickerDetail from "@/components/TickerDetail";

import * as S from "./styled";

function Main() {
  return (
    <S.MainPageWrapper>
      <TickerDetail />
      <Orderbook />
      <CryptoChart />
      <TickerBoard />
    </S.MainPageWrapper>
  );
}

export default Main;
