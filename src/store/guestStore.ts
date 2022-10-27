import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';
import Guests from "../routes/guests";

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
  })),
  addGuest: () => set((state: any) => ({
    guests: [
      ...state.guests,
      {
        gId: uuidv4(),
        stays: [],
        formNames: ["form1", "form2", "form3", "form4"],
        form1: {
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          completed: false,
        },
        form2: {
          nickName: "",
          gender: "",
          genderPronouns: "",
          birthdate: "",
          completed: false,
        },
        form3: {
          program: "",
          caseManagerName: "",
          caseManagerMobile: "",
          caseManagerEmail: "",
          caseManagerWorkPhone: "",
          completed: false,
        },
        form4: {
          emergencyContactName: "",
          emergencyContactMobile: "",
          emergencyContactEmail: "",
          emergencyContactWorkPhone: "",
          completed: false,
        },
        extraInfo: {
          createdDateFrontend: Date.now(),
          createByFrontend: "AJ",
          lastModifiedDateFrontend: Date.now(),
          modifiedByFrontend: "AJ",
          completed: false,
        },
      }
    ]
  })),
  updateGuest: (gId: any, page: any) => set((state: any) => ({
    guests: state.guests.map((guest:any) => {
      if(guest.gId === gId) {
        return {
          ...guest,
          page: guest.page,
        };
      } else {
        return guest;
      };
    })
  })
  ),
  removeGuest: (gId:any) => set((state:any) => ({
    guests: state.guests.filter((guest:any) => guest.gId !== gId)
  })),
});

const useGuestStore = create(
  devtools(
    persist(guestStore, {
      name: "guests",
    })
  )
);

export default useGuestStore;