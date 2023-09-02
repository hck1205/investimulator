import React, { useCallback, useEffect, useMemo } from "react";
import Script from "next/script";

import { CryptoChartWrapper } from "./CryptoChart.styled";
import { useCurrentAllTickerInfoValue } from "@/atoms/ticketPriceAtom";
import { useOrderbookCodeValue } from "@/atoms/orderbookAtom/orderbookCodeAtom";

function CryptoChart() {
  const orderbookCode = useOrderbookCodeValue();

  const symbol = useMemo(() => {
    const [, code = ""] = orderbookCode.split("-");
    return code ? `UPBIT:${code}KRW` : "UPBIT:BTCKRW";
  }, [orderbookCode]);

  const createWidget = useCallback(() => {
    if (document.getElementById("chart_container") && "TradingView" in window) {
      new window.TradingView.widget({
        autosize: true,
        symbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "kr",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "chart_container",
        backgroundColor: "#353535",
      });
    }
  }, [symbol]);

  useEffect(() => createWidget(), [symbol]);

  return (
    <CryptoChartWrapper>
      <Script
        type="text/javascript"
        id="chart-widget-loading-script"
        src="https://s3.tradingview.com/tv.js"
        onLoad={createWidget}
      />
      <div id="chart_container" />
    </CryptoChartWrapper>
  );
}

export default CryptoChart;
