import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';
import Guests from "../routes/guests";

const guestStore = (set: any) => ({
  guests: [],
  initialPageNumber: 1,
  maximumPageNumber: 4,
  currentPageNumber: 1,
  activeGId: "",
  formNames: ["form1", "form2", "form3", "form4"],
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
  createGId: () => { uuidv4()},
  addGuest: (newGId: any) => set((state: any) => ({
    guests: [
      ...state.guests,
      {
        gId: newGId,
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
          extraInfo: {
            ...guest,
            lastModifiedDateFrontend: Date.now(),
            modifiedByFrontend: "AJ",
          }
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