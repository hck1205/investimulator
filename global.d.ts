export {};

declare global {
  interface Window {
    TradingView: {
      widget: any;
    };
  }
}
