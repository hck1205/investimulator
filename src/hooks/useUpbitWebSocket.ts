import * as R from "rambda";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useWebSocket, { resetGlobalState } from "react-use-websocket";

import { refineAllMarket, updateLatestTickerInfo } from "@/utils";
import { useAllMarketWrite } from "@/atoms/upbitAtom";
import { EXTERNAL_API_BASE_URL, WEB_SOCKET } from "@/constpack";
import { getAllMarket, getTickerMarketPrice } from "@/API/upbit";
import { currentAllTickerInfoAtom } from "@/atoms/ticketPriceAtom";

import type { TTicker } from "@/types";

const useUpbitWebSocket = () => {
  const [currentAllTickerInfo, setCurrentAllTickerInfo] = useAtom(
    currentAllTickerInfoAtom
  );

  const setAllMarket = useAllMarketWrite();

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    EXTERNAL_API_BASE_URL.UPBIT_WS,
    {
      onOpen: async () => {
        try {
          /**
           * Get All available coin market that
           * includes 'KRW' only for Korean users
           */
          const allMarketList = await getAllMarket();
          const filteredCoinList = allMarketList.filter(
            (coin) => coin.market.indexOf("KRW") > -1
          );

          const refinedAllMarket = refineAllMarket(filteredCoinList);
          setAllMarket(refinedAllMarket);

          /**
           * Refine initial ticker information within "code"
           * and make a websocket connection
           */
          const codes = filteredCoinList.map(R.prop("market"));
          const initialTickers = await getTickerMarketPrice(codes.toString());
          const initialTickersWithCode = initialTickers.map((ticker) => {
            ticker["code"] = ticker.market;
            return ticker;
          });

          setCurrentAllTickerInfo(initialTickersWithCode);

          /**
           * Make a websocket connection with list of code names
           */
          return sendJsonMessage([
            { ticket: uuidv4() },
            { type: WEB_SOCKET.TICKER, codes },
          ]);
        } catch (e) {
          console.error(e);
        }
      },
      onMessage: async (e) => {
        try {
          const msgStr = await new Response(e.data).text();
          const tickerInfo = JSON.parse(msgStr) as TTicker;

          const updatedAllTickerInfo = updateLatestTickerInfo({
            currentAllTickerInfo,
            tickerInfo,
          });

          setCurrentAllTickerInfo(updatedAllTickerInfo);
        } catch (e) {
          console.error(e);
        }
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
