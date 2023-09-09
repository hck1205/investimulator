import { atom, useAtomValue, useSetAtom } from "jotai";

export const useLoginModalAtom = atom<boolean>(true);
export const useLoginModalOpenValue = () => useAtomValue(useLoginModalAtom);
export const useLoginModalOpenWrite = () => useSetAtom(useLoginModalAtom);
