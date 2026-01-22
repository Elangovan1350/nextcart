import { create } from "zustand";

type Store = {
  cart: number;
  setCart: (count: number) => void;
  session: any;
  setSession: (session: any) => void;
};

const useStore = create<Store>()((set) => ({
  cart: 0,
  setCart: (count) => set({ cart: count }),
  session: null,
  setSession: (session) => set({ session }),
}));
export default useStore;
