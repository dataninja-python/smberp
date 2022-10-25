import create from "zustand";
import { getDiffieHellman, RandomUUIDOptions } from "crypto";
import { devtools, persist } from "zustand/middleware";
import { isMatchWith } from "lodash";

// note: see typescript string literal types
type GenderPronouns = "She/Her/Hers" | "He/Him/His" | "They/Them/Theirs" | "Ze/Zir/Zirs";

interface GuestPageProps {
  gId: string;
  page1: {};
  page2: {};
  page3: {};
  page4: {};
  extraInfo: {};
}

interface Page1Props {
  isFirst: boolean;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}

interface Page2Props {
  nickName: string;
  gender: string;
  genderPronouns: GenderPronouns;
  birthdate: any;
}

interface Page3Props {
  program: string;
  caseManagerName: string;
  caseManagerMobile: string;
  caseManagerEmail: string;
  caseManagerWorkPhone: string;
}

interface Page4Props {
  isLast: boolean;
  emergencyContactName: string;
  emergencyContactMobile: string;
  emergencyContactEmail: string;
  emergencyContactWorkPhone: string;
}

const initGuestData = {
  gId: "",
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
  emergencyContactName: "",
  emergencyContactMobile: "",
  emergencyContactEmail: "",
  emergencyContactWorkPhone: "",
  createdDateFrontend: "",
  createByFrontend: "",
  lastModifiedDateFrontend: "",
  modifiedByFrontend: "",
}

const guestQuestions = {
  gId: "Guest Id",
  firstName: "First Name",
  lastName: "Last Name",
  mobile: "Mobile Number",
  email: "Email Address",
  nickName: "Nick Name",
  gender: "Gender",
  genderPronouns: "Gender Pronouns",
  birthdate: "Birthdate",
  program: "Program",
  caseManagerName: "Case Manager Full Name",
  caseManagerMobile: "Case Manager Mobile",
  caseManagerEmail: "Case Manager Email Address",
  caseManagerWorkPhone: "Case Manager Work Phone",
  emergencyContactName: "Emergency Contact Full Name",
  emergencyContactMobile: "Emergency Contact Mobile Number",
  emergencyContactEmail: "Emergency Contact Email Address",
  emergencyContactWorkPhone: "Emergency Contact Work Phone",
  createdDateFrontend: "Created Date Frontend",
  createByFrontend: "Created By Frontend",
  lastModifiedDateFrontend: "Last Modified Date Frontend",
  modifiedByFrontend: "Modified By Frontend",
}

const genderPronouns = [ "She/Her/Hers", "He/Him/His", "They/Them/Theirs", "Ze/Zir/Zirs" ]

let useGuestStore: any = create((set: any) => ({
  guests: [],
  activeGuestId: "",
  currentPage: 1,
  maxPages: 4,
  startIndex: 0,
  gPronouns: [ "She/Her/Hers", "He/Him/His", "They/Them/Theirs", "Ze/Zir/Zirs" ],
  form1: {
    gId: "",
    isFirst: true,
    isLast: false,
    pageNum: 1,
    firstName: "First Name",
    lastName: "Last Name",
    mobile: "Mobile Number",
    email: "Email Address",
  },
  form2: {
    gId: "",
    isTrue: false,
    isLast: false,
    pageNum: 2,
    nickName: "Nick Name",
    gender: "Gender",
    genderPronouns: "Gender Pronouns",
    birthdate: "Birthdate",
  },
  form3: {
    gId: "",
    isTrue: false,
    isLast: false,
    pageNum: 3,
    program: "Program",
    caseManagerName: "Case Manager Full Name",
    caseManagerMobile: "Case Manager Mobile",
    caseManagerEmail: "Case Manager Email Address",
    caseManagerWorkPhone: "Case Manager Work Phone",
  },
  form4: {
    gId: "",
    isTrue: false,
    isLast: true,
    pageNum: 4,
    emergencyContactName: "Emergency Contact Full Name",
    emergencyContactMobile: "Emergency Contact Mobile Number",
    emergencyContactEmail: "Emergency Contact Email Address",
    emergencyContactWorkPhone: "Emergency Contact Work Phone",
  },
  extraInfo: {
    gId: "",
    createdDateFrontend: "Created Date Frontend",
    createdByFrontend: "",
    lastModifiedDateFrontend: "Last Modified Date Frontend",
    modifiedByFrontend: "Modified By Frontend",
  },
  userNow: "AJ",
  createGuest: (guest: any) => set(
    (state: any) => ({
      guests: [
        ...state.guests,
        {
          gId: self.crypto.randomUUID(),
          form1: { ...state.page1 },
          form2: { ...state.page2 },
          form3: { ...state.page3 },
          form4: { ...state.page4 },
          extraInfo: { 
            createdDateFrontend: Date.now(),
            createdByFrontend: "AJ",
            lastModifiedDateFrontend: Date.now(),
            modifiedByFrontend: "AJ",
          },
        }
      ]
    })),
    updateGuest: (id: any) => set((state:any) => ({
      guests: state.guests.map(((guest: any) => {
        if(id === guest.id) {
          return {
            ...guest,
            lastModifiedDateFrontend: Date.now(),
            modifiedByFrontend: "AJ",
          }
        } else {
          return guest
        }
      })),
    })),
    removeGuest: (id: any) => set((state:any) => ({
      guests: state.guests.filter((guest:any) => guest.id !== id)
    })),
    nextPage: () => set((state: any) => ({
      currentPage: Math.min(state.currentPage + 1, state.maxPages)
    } )),
    prevPage: () => set((state: any) => ({
      currentPage: Math.max(state.currentPage - 1, 1)
    })),
    resetForm: () => set({ currentPage: 1 }),
    deleteAll: () => set({ guests: [] })
}));

useGuestStore = persist(useGuestStore, {name: "saved-guests"});

export default useGuestStore