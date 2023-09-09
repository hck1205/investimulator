import TickerBoard from "@/components/TickerBoard";
import DetailDrawer from "@/components/DetailDrawer";
import LoginModal from "@/components/LoginModal/LoginModal";

import * as S from "./styled";

function Main() {
  return (
    <S.MainPageWrapper>
      <TickerBoard />
      <DetailDrawer />
      <LoginModal />
    </S.MainPageWrapper>
  );
}

export default Main;
