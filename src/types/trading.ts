export type TTicker = {
  type: "ticker";
  market?: string; //  "KRW-BTC";
  code: string; // "KRW-BTC";
  opening_price: number; // 38838000;
  high_price: number; // 38934000;
  low_price: number; // 38601000;
  trade_price: number; // 38603000;
  prev_closing_price: number; // 38829000;
  change: "RISE" | "FALL" | "EVEN"; // 상승 | 하락 | 보합;
  change_price: number; // 226000;
  signed_change_price: number; // -226000;
  change_rate: number; // 0.005820392;
  signed_change_rate: number; // -0.005820392;
  trade_volume: number; // 0.00000945;
  acc_trade_volume: number; // 555.76499703;
  acc_trade_price_24h: number; // 71651232942.72713;
  acc_trade_price: number; //21541433903.99756;
  acc_trade_volume_24h: number; // 1850.7946756;
  trade_date: string; // "20230722" yyyyMMdd;
  trade_time: string; // "060954" HHmmss;
  trade_timestamp: number; // 1690006194106;
  ask_bid: "ASK" | "BID"; // 매도 | 매수;
  acc_ask_volume: number; // 360.49386844;
  acc_bid_volume: number; // 195.27112859;
  highest_52_week_price: number; // 41569000;
  highest_52_week_date: string; // "2023-06-30" yyyy-MM-dd;
  lowest_52_week_price: number; //  20700000;
  lowest_52_week_date: string; // "2022-12-30" yyyy-MM-dd;
  market_state: "PREVIEW" | "ACTIVE" | "DELISTED"; // 입금지원 | 거래지원가능 | 거래지원종료;
  is_trading_suspended: boolean;
  delisting_date?: string; // null;
  market_warning: "NONE" | "CAUTION"; // 해당없음 | 투자유의;
  timestamp: 1690006194139;
  stream_type: "REALTIME" | "SNAPSHOT"; // 실시간 | 스냅샷;
};

export type TTrade = {
  type: "trade";
  code: string; // "KRW-BTC";
  trade_price: number; // 38629000;
  trade_volume: number; // 0.0077623;
  ask_bid: "ASK" | "BID"; // 매도 | 매수;
  prev_closing_price: number; // 38829000;
  change: "RISE" | "FALL" | "EVEN"; // 상승 | 하락 | 보합;
  change_price: number; // 200000;
  trade_date: number; // "2023-07-22";
  trade_time: string; // "06:21:48";
  trade_timestamp: number; // 1690006908891;
  timestamp: number; // 1690006908922;
  sequential_id: number; // 1690006908891000;
  stream_type: "REALTIME" | "SNAPSHOT"; // 실시간 | 스냅샷;
};

export type TOrderbook = {
  type: "orderbook";
  code: string; // "KRW-BTC";
  total_ask_size: number; // 3.28815461;
  total_bid_size: number; // 5.47883768;
  orderbook_units: TOrderbookUnit[];
  timestamp: number; // 1690007165046;
  stream_type: "REALTIME" | "SNAPSHOT"; // 실시간 | 스냅샷;
};

export type TOrderbookUnit = {
  ask_price: number; // 38674000;
  ask_size: number; // 0.0195104;
  bid_price: number; // 38624000;
  bid_size: number; // 0.05178127;
};

export type TMarket = {
  [key: string]: {
    english_name: string;
    korean_name: string;
    market: string;
    market_warning: string;
  };
};
