import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useWebSocket, { resetGlobalState } from 'react-use-websocket';

import { EXTERNAL_API_BASE_URL, WEB_SOCKET } from '@/constpack';

import type { TTicker } from '@/types';

type TProps = {
  codes: TTicker['code'][];
};

const useOrderbookWebSocket = ({ codes }: TProps) => {
  const { sendJsonMessage, lastMessage, readyState, getWebSocket } =
    useWebSocket(EXTERNAL_API_BASE_URL.UPBIT_WS_TICKER, {
      onOpen: async () => {
        try {
          return sendJsonMessage([
            { ticket: uuidv4() },
            { type: WEB_SOCKET.ORDER_BOOK, codes },
          ]);
        } catch (e) {
          console.error('WEB_SOCKET.ORDER_BOOK: ', e);
        }
      },
      onMessage: async (e) => {
        try {
          const msgStr = await new Response(e.data).text();
          const orderbookInfo = JSON.parse(msgStr) as TTicker;

          console.log('orderbookInfo', orderbookInfo);
        } catch (e) {
          console.error(e);
        }
      },
    });

  return {
    lastMessage,
    readyState,
    sendJsonMessage,
    getWebSocket,
  };
};

export default useOrderbookWebSocket;
