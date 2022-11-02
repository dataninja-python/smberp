import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';

const guestStore = (set: any) => ({
  guests: [],
  initialIndex: 0,
  initialPageNumber: 1,
  maximumPageNumber: 4,
  currentPageNumber: 1,
  activeGId: "",
  programs: [ "P1", "P2", "P3", "P4", "P5" ],
  genderPronouns: [ "She/Her/Hers", "He/Him/His", "They/Them/Theirs", "Ze/Zir/Zirs" ],
  back: () => set((state: any) => ({
    currentPageNumber: Math.max(state.currentPageNumber - 1, state.initialPageNumber)
  })),
  next: () => set((state: any) => ({
    currentPageNumber: Math.min(state.currentPageNumber + 1, state.maximumPageNumber)
  })),
  reset: () => set((state: any) => ({
    currentPageNumber: state.initialPageNumber,
  })),
  createGId: () => {uuidv4()},
  addNewGuest: () => set((state: any) => ({
    guests: [
      ...state.guests,
      {
        gId: state.createGId(),
        stays: [],
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        nickName: "",
        gender: "",
        genderPronouns: "",
        birthdate: "",
        program: "",
        caseManagerName: "",
        caseManagerMobile: "",
        caseManagerEmail: "",
        caseManagerWorkPhone: "",
        emergencyContactFirstName: "",
        emergencyContactLastName: "",
        emergencyContactMobile: "",
        emergencyContactWorkPhone: "",
        emergencyContactEmail: "",
        createdDateFrontend: Date.now(),
        lastModifiedDateFrontend: Date.now(),
      }
    ]
  })),
  updateGuest: (gId: any, data: any) => set((state: any) => ({
    guests: state.guests.map((guest:any) => {
      if(guest.gId === gId) {
        return {
          ...data, lastModifiedDateFrontend: Date.now(),
          };
      } else {
        return guest;
      };
    })
  })),
  removeGuest: (gId:any) => set((state:any) => ({
    guests: state.guests.filter((guest:any) => guest.gId !== gId)
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