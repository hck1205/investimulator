export const API_BASE_URL: string = "http://localhost:3030/api/v1";
export const API_REQUEST_TIMEOUT: number = 20000;
export const SESSION_COOKIE_KEY: string = process.env.SESSION_COOKIE_KEY;

export const FIRE_BASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIRE_BASE_API_KEY,
  authDomain: "investimulator.firebaseapp.com",
  projectId: "investimulator",
  storageBucket: "investimulator.appspot.com",
  messagingSenderId: "41050918928",
  appId: "1:41050918928:web:3dadf2a2d4a437e4673a95",
  measurementId: "G-QNK5PZSX37",
};

export const EXTERNAL_API_BASE_URL = {
  UPBIT: "https://api.upbit.com/v1",
  UPBIT_WS: "wss://api.upbit.com/websocket/v1",
};
