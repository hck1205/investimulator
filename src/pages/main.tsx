import { memo, useEffect } from "react";

import useUpbitWebSocket from "@/hooks/useUpbitWebSocket";
import TickerBoard from "@/components/TickerBoard";

import * as S from "./main.styled";

function Main() {
  useUpbitWebSocket();

  useEffect(() => {}, []);

  return (
    <S.MainPageWrapper>
      <TickerBoard />
    </S.MainPageWrapper>
  );
}

export default Main;
