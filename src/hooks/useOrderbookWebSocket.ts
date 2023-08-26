import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useWebSocket from "react-use-websocket";
import { useOrderbookCodeValue } from "@/atoms/orderbookAtom/orderbookCodeAtom";

import {
  DEFAULT_ORDERBOOK_CODE,
  EXTERNAL_API_BASE_URL,
  WEB_SOCKET,
  WEB_SOCKET_CLOSE_CODE,
} from "@/constpack";

const useOrderbookWebSocket = () => {
  const [connectWebSocket, setConnectWebSocket] = useState(true);
  const orderbookCode = useOrderbookCodeValue();

  const { sendJsonMessage, lastMessage, readyState, getWebSocket } =
    useWebSocket(
      EXTERNAL_API_BASE_URL.UPBIT_WS_TICKER,
      {
        onOpen: () => {
          try {
            const code = orderbookCode || DEFAULT_ORDERBOOK_CODE;

            return sendJsonMessage([
              { ticket: uuidv4() },
              { type: WEB_SOCKET.ORDER_BOOK, codes: [code] },
            ]);
          } catch (e) {
            console.error("WEB_SOCKET.ORDER_BOOK onOpen: ", e);
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

    if (orderbookCode && socket) {
      setConnectWebSocket(false);
      /**
       * https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5
       * Status codes in the range 3000-3999 are reserved for use by
       * libraries, frameworks, and applications.
       */
      socket.close(WEB_SOCKET_CLOSE_CODE, "orderbook code update");
    }
  }, [orderbookCode]);

  return {
    lastMessage,
    readyState,
    sendJsonMessage,
    getWebSocket,
  };
};

export default useOrderbookWebSocket;
