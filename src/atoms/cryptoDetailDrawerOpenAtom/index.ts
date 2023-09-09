import { atom, useAtomValue, useSetAtom } from "jotai";

export const useCryptoDetailDrawerOpenAtom = atom<boolean>(false);
export const useCryptoDetailDrawerOpenValue = () =>
  useAtomValue(useCryptoDetailDrawerOpenAtom);
export const useCryptoDetailDrawerOpenWrite = () =>
  useSetAtom(useCryptoDetailDrawerOpenAtom);
