import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } =recoilPersist({
   key: 'localstorage',
   storage: localStorage,
})

export const memberIdState = atom({
    key: 'memberIdState',
    default: {},
    effects_UNSTABLE: [persistAtom],
})