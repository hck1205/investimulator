import TickerBoard from "@/components/TickerBoard";
import DetailDrawer from "@/components/DetailDrawer";

import * as S from "./styled";

function Main() {
  return (
    <S.MainPageWrapper>
      <TickerBoard />
      <DetailDrawer />
    </S.MainPageWrapper>
  );
}

export default Main;
