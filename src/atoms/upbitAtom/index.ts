import { atom, useAtomValue, useSetAtom } from "jotai";

import type { TMarket } from "@/types";

export const useAllMarketAtom = atom<TMarket>({});
export const useAllMarketValue = () => useAtomValue(useAllMarketAtom);
export const useAllMarketWrite = () => useSetAtom(useAllMarketAtom);
