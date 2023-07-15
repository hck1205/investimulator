import { atom, useAtomValue, useSetAtom } from "jotai";

export const upbitCoinListAtom = atom([]);
export const useUpbitCoinListValue = () => useAtomValue(upbitCoinListAtom);
export const useUpbitCoinListWrite = () => useSetAtom(upbitCoinListAtom);
