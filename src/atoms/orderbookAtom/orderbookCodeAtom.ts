import { atom, useAtomValue, useSetAtom } from "jotai";

export const orderbookCodeAtom = atom<string>("");
export const useOrderbookCodeValue = () => useAtomValue(orderbookCodeAtom);
export const useOrderbookCodeWrite = () => useSetAtom(orderbookCodeAtom);
