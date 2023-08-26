import TickerBoard from "@/components/TickerBoard";
import Orderbook from "@/components/Orderbook/Orderbook";

import * as S from "./styled";

function Main() {
  return (
    <S.MainPageWrapper>
      <Orderbook />
      <TickerBoard />
    </S.MainPageWrapper>
  );
}

export default Main;
