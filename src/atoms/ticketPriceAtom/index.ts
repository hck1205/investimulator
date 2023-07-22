import { atom, useAtomValue, useSetAtom } from "jotai";
import { TTicker } from "@/types";

export const currentAllTickerInfoAtom = atom<TTicker[]>([]);
export const useLatestAllTicketPriceValue = () =>
  useAtomValue(currentAllTickerInfoAtom);
export const useLatestAllTicketPriceWrite = () =>
  useSetAtom(currentAllTickerInfoAtom);
