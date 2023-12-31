import * as R from "rambda";
import { TOrderbook, TTicker } from "@/types";
import { TCoinList } from "@/API/upbit";

export const updateLatestTickerInfo = (params: {
  currentAllTickerInfo: TTicker[];
  tickerInfo: TTicker;
}) => {
  let { currentAllTickerInfo, tickerInfo } = params;

  const { code } = tickerInfo;
  const targetIndex = R.findIndex(R.propEq(code, "code"))(currentAllTickerInfo);

  if (targetIndex > -1) {
    currentAllTickerInfo = R.update(
      targetIndex,
      tickerInfo,
      currentAllTickerInfo
    );
  }

  return currentAllTickerInfo;
};

export const refineAllMarket = (allCoinList: TCoinList) => {
  const allCoinInfo = {};

  for (const coinInfo of allCoinList) {
    const { market } = coinInfo;
    allCoinInfo[market] = coinInfo;
  }

  return allCoinInfo;
};

export const parseSocketMessage = async (lastMessage: MessageEvent<any>) => {
  if (lastMessage) {
    const msgStr = await new Response(lastMessage.data).text();
    return JSON.parse(msgStr) as TTicker | TOrderbook;
  } else {
    return undefined;
  }
};
