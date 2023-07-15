import { useEffect } from "react";
// import useWebSocket, { ReadyState } from "react-use-websocket";
// import { getAllMarket } from "@/API/upbit";

// import { EXTERNAL_API_BASE_URL } from "@/constpack";
import useUpbitWebSocket from "@/hooks/useUpbitWebSocket";
import { useUpbitCoinListValue } from "@/atoms/upbitAtom";
import CoinRow from "@/components/CoinRow/CoinRow";

import type { TCoinInfo } from "@/API/upbit/query/getAllMarket";

import * as S from "./main.styled";

type Props = {};

function Main({}: Props) {
  const upbitCoinList = useUpbitCoinListValue();

  const { lastMessage } = useUpbitWebSocket();

  useEffect(() => {}, []);

  return (
    <S.MainPageWrapper>
      {upbitCoinList.map((coin: TCoinInfo) => {
        return <CoinRow key={coin.market} coin={coin} />;
      })}
    </S.MainPageWrapper>
  );
}

export default Main;
