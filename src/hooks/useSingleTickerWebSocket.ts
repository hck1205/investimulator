import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { v4 as uuidv4 } from "uuid";

import {
  EXTERNAL_API_BASE_URL,
  WEB_SOCKET,
  WEB_SOCKET_CLOSE_CODE,
} from "@/constpack";

const useTickerWebSocket = (code: string) => {
  const [connectWebSocket, setConnectWebSocket] = useState(true);

  const { sendJsonMessage, lastMessage, readyState, getWebSocket } =
    useWebSocket(
      EXTERNAL_API_BASE_URL.UPBIT_WS_TICKER,
      {
        onOpen: async () => {
          try {
            return sendJsonMessage([
              { ticket: uuidv4() },
              { type: WEB_SOCKET.TICKER, codes: [code] },
            ]);
          } catch (e) {
            console.error(e);
          }
        },
        onClose: ({ code }: WebSocketEventMap["close"]) => {
          if (code === WEB_SOCKET_CLOSE_CODE) {
            setConnectWebSocket(true);
          }
        },
      },
      connectWebSocket
    );

  useEffect(() => {
    const socket = getWebSocket();

    if (code && socket) {
      setConnectWebSocket(false);
      socket.close(WEB_SOCKET_CLOSE_CODE, "ticker code update");
    }
  }, [code]);

  return {
    lastMessage,
    readyState,
  };
};

export default useTickerWebSocket;
