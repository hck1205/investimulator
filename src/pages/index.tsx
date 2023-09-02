import TickerBoard from "@/components/TickerBoard";
import Orderbook from "@/components/Orderbook";
import CryptoChart from "@/components/CryptoChart";

import * as S from "./styled";

function Main() {
  return (
    <S.MainPageWrapper>
      <Orderbook />
      <CryptoChart />
      <TickerBoard />
    </S.MainPageWrapper>
  );
}

export default Main;
