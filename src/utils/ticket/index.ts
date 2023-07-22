import * as R from "rambda";
import { TTicker } from "@/types";

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
