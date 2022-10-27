import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';

const guestStore = (set: any) => ({
  guests: [],
  initPageNum: 1,
  maxPageNum: 4,
  currentPage: 1,
  back: () => set((state: any) => ({
    currentPage: Math.max(state.currentPage - 1, state.initPageNum)
  })),
  next: () => set((state: any) => ({
    currentPage: Math.min(state.currentPage + 1, state.maxPageNum)
  })),
  reset: () => set((state: any) => ({
    page: state.initPageNum,
  }))
});

const useGuestStore = create(
  devtools(
    persist(guestStore, {
      name: "guests",
    })
  )
);

export default useGuestStore;