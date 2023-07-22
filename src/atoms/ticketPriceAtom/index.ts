import { atom, useAtomValue, useSetAtom } from "jotai";
import { TTicker } from "@/types";

export const currentAllTickerInfoAtom = atom<TTicker[]>([]);
export const useCurrentAllTickerInfoValue = () =>
  useAtomValue(currentAllTickerInfoAtom);
export const useCurrentAllTickerInfoWrite = () =>
  useSetAtom(currentAllTickerInfoAtom);
