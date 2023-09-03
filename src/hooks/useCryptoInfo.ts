import { useAllMarketValue } from "@/atoms/marketAtom";
import { useOrderbookCodeValue } from "@/atoms/orderbookAtom/orderbookCodeAtom";
import { useMemo } from "react";

const useCryptoInfo = () => {
  const code = useOrderbookCodeValue();
  const allMarketInfo = useAllMarketValue();

  const currentCryptoInfo = useMemo(() => {
    const marketInfo = allMarketInfo[code as string];
    const krName = marketInfo?.korean_name || "";
    const enName = marketInfo?.english_name || "";
    const [currency = "", coinName = ""] = (marketInfo?.market || "").split(
      "-"
    );

    return {
      krName,
      enName,
      currency,
      coinName,
    };
  }, [code, allMarketInfo]);

  return { currentCryptoInfo, code };
};

export default useCryptoInfo;
