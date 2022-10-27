import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';

const guestStore = (set: any) => ({
  initPageNum: 1,
  maxPageNum: 4,
  page: 1,
  back: () => set((state: any) => ({
    page: state.page - 1
  })),
  next: () => set((state: any) => ({ page: state.page + 1})),
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