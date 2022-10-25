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

const genderPronouns = ["She/Her/Hers", "He/Him/His", "They/Them/Theirs", "Ze/Zir/Zirs"]



let useGuestStore: any = create((set) => ({
  guests: [],
  startPageIndex: 0,
  minFormPage: 1,
  maxFormPage: 4,
  addGuest: (form1Data: any) => set((state:any) => ({
    guests: [
      ...state.guests,
      {
        gId: uuidv4(),
        form1: {form1Data},
        form2: {},
        form3: {},
        form4: {},
        extraInfo: {
          createdDateFrontend: Date.now(),
          createByFrontend: "AJ",
          lastModifiedDateFrontend: Date.now(),
          modifiedByFrontend: "AJ",
        }
      }
    ]
  })),
  updateGuest: (guest:any) => set((state:any) => ({
    guests: state.guests.map(
      
    )
  })),
  deleteAll: () => set((state: any) => ({ guests: [] })),
}));

useGuestStore = persist(useGuestStore, {name: "saved-guests"});

export default useGuestStore