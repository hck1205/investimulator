import axios from "axios";

import { EXTERNAL_API_BASE_URL } from "@/constpack";
import { TTicker } from "@/types";

export const getTickerMarketPrice = async (
  tickers: string
): Promise<TTicker[]> => {
  const { data } = await axios({
    url: `${EXTERNAL_API_BASE_URL.UPBIT}/ticker`,
    method: "get",
    params: {
      markets: tickers,
    },
  });

  return data;
};
