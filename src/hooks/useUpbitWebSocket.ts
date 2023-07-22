import { useAtom } from "jotai";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useWebSocket, { resetGlobalState } from "react-use-websocket";

import { updateLatestTickerInfo } from "@/utils";
import { useUpbitCoinListWrite } from "@/atoms/upbitAtom";
import { EXTERNAL_API_BASE_URL, WEB_SOCKET } from "@/constpack";
import { getAllMarket, getTickerMarketPrice } from "@/API/upbit";
import { currentAllTickerInfoAtom } from "@/atoms/ticketPriceAtom";

import type { TTicker } from "@/types";

const useUpbitWebSocket = () => {
  const [currentAllTickerInfo, setCurrentAllTickerInfo] = useAtom(
    currentAllTickerInfoAtom
  );

  const setUpbitCoinList = useUpbitCoinListWrite();

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    EXTERNAL_API_BASE_URL.UPBIT_WS,
    {
      onOpen: async () => {
        try {
          const allMarketList = await getAllMarket();
          const marketList = allMarketList
            .map(({ market }) => market)
            .toString();

          const initialTickers = await getTickerMarketPrice(marketList);
          const initialTickersWithCode = initialTickers.map((ticker) => {
            ticker["code"] = ticker.market;
            return ticker;
          });

          setUpbitCoinList(allMarketList);
          setCurrentAllTickerInfo(initialTickersWithCode);

          return sendJsonMessage([
            { ticket: uuidv4() },
            { type: WEB_SOCKET.TICKER, codes: ["KRW-BTC"] },
          ]);
        } catch (e) {
          console.error(e);
        }
      },
      onMessage: async (e) => {
        const msgStr = await new Response(e.data).text();
        const tickerInfo = JSON.parse(msgStr) as TTicker;

        const updatedAllTickerInfo = updateLatestTickerInfo({
          currentAllTickerInfo,
          tickerInfo,
        });

        setCurrentAllTickerInfo(updatedAllTickerInfo);
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
