import { useEffect } from "react";
import useWebSocket, { resetGlobalState } from "react-use-websocket";
import { uuid } from "uuidv4";

import { getAllMarket } from "@/API/upbit";
import { EXTERNAL_API_BASE_URL } from "@/constpack";
import { useUpbitCoinListWrite } from "@/atoms/upbitAtom";

const useUpbitWebSocket = () => {
  const setUpbitCoinList = useUpbitCoinListWrite();

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    EXTERNAL_API_BASE_URL.UPBIT_WS,
    {
      onOpen: async () => {
        const allMarketList = await getAllMarket();
        setUpbitCoinList(allMarketList);

        return sendJsonMessage([
          { ticket: uuid() },
          { type: "trade", codes: ["KRW-BTC"] },
        ]);
      },
    }
  );

  useEffect(() => {
    window.addEventListener("unload", () => {
      resetGlobalState(EXTERNAL_API_BASE_URL.UPBIT_WS);
    });
  }, []);

  return {
    lastMessage,
    readyState,
  };
};

export default useUpbitWebSocket;
