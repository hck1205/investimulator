import { DEFAULT_ORDERBOOK_CODE } from "@/constpack";
import { atom, useAtomValue, useSetAtom } from "jotai";

export const orderbookCodeAtom = atom<string>(DEFAULT_ORDERBOOK_CODE);
export const useOrderbookCodeValue = () => useAtomValue(orderbookCodeAtom);
export const useOrderbookCodeWrite = () => useSetAtom(orderbookCodeAtom);
