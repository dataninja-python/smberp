import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';

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
  isLast: boolean;
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

const form1 = [ "First Name", "Last Name", "Mobile Number", "Email Address", ]
const form2 = [ "Nick Name", "Gender", "Gender Pronouns", "Birthdate", ]
const form3 = [ "Program", "Case Manager Full Name", "Case Manager Mobile", "Case Manager Email Address", "Case Manager Work Phone", ]
const form4 = [ "Emergency Contact Full Name", "Emergency Contact Mobile Number", "Emergency Contact Email Address", "Emergency Contact Work Phone", ]

const formLabels = [
  form1,
  form2,
  form3,
  form4
]

interface GuestDataProps {
  gId: string;
  form1: {};
  form2: {};
  form3: {};
  form4: {};
  extraInfo: {};
}

interface Form1Props {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}

const genderPronouns = ["She/Her/Hers", "He/Him/His", "They/Them/Theirs", "Ze/Zir/Zirs"]

interface useGuestStoreProps {
  guests: any[];
  labels: any[];
  formNames: any[];
  extraInfo: any[];
  currentPage: number;
  minFormPages: number;
  maxFormPages: number;
  createGuest: () => void;
  next: () => void;
  back: () => void;
  deleteAllGuests: () => void;
}

export const useGuestStore = create<any>((set: any) => ({
  guests: [],
  activePage: 1,
  pageData: {
    minPage: 1,
    maxPage: 4,
    pageIndex: 0,
  },
  prevPage: () => {
    set((state: any) => ({
      activePage: () => {
        state.activePage - 1
      },
    }))
  },
  nextPage: () => {
    set((state: any) => ({
      activePage: () => {
        state.activePage + 1
      },
    }))
  },
  addGuest: () => {
    set((state:any) => ({
      guests: [
        ...state.guests,
        {
          gId: uuidv4(),
          form1: {},
          form2: {},
          form3: {},
          form4: {},
          extraInfo: {},
        }
      ],
    }))
  },
  removeGuest: (removeId: any) => {
    set((state: any) => ({
      guests: state.guests.filter((guest: any) => guest.gId !== removeId)
    }))
  },
}));

//useGuestStore = persist<useGuestStoreProps>(useGuestStore, {name: "saved-guests"});

//export useGuestStore