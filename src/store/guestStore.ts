import create from "zustand";
import { RandomUUIDOptions } from "crypto";
import { devtools, persist } from "zustand/middleware";

interface GenderPronouns {
  pronouns: "She/Her/Hers" | "He/Him/His" | "They/Them/Theirs" | "Ze/Zir/Zirs";
}

interface GuestProps {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string | number;
  email: string;
  nickName: string;
  pronouns: GenderPronouns;
  birthdate: string | Date;
  program: string;
  caseManagerName: string;
  caseManagerMobile: string | number;
  caseManagerEmail: string;
  caseManagerWorkPhone: string | number;
  emergencyContactName: string;
  emergencyContactMobile: string | number;
  emergencyContactEmail: string;
  emergencyContactWorkPhone: string | number;
  createdDateFrontend: string | Date;
  createByFrontend: string | number;
  lastModifiedDateFrontend: string | Date;
  modifiedByFrontend: string | Date;
}

const initGuests = [
  {
    id: 0,
    firstName: "John",
    lastName: "James",
    mobile: "4986741829",
    email: "slkjfdaf@gmail.com",
    nickName: "jj",
    pronouns: "He/Him/His",
    gender: "Male",
    birthdate: "3/15/1985",
    program: "Program #2",
    caseManagerName: "Susan Summers",
    caseManagerMobile: "4441234567",
    caseManagerEmail: "ldsafj@gmail.com",
    caseManagerWorkPhone: "4441234567",
    emergencyContactName: "Diane Summers",
    emergencyContactMobile: "1231234567",
    emergencyContactEmail: "kldadjf@email.com",
    emergencyContactWorkPhone: "3431234567",
    createdDateFront: "8/10/2022",
    createByFront: "Jane Doe",
    lastModifiedDateFront: "8/10/22",
    modifiedByFront: "Jane Doe",
  },
  {
    id: 1,
    firstName: "John2",
    lastName: "James",
    mobile: "4986741829",
    email: "slkjfdaf@gmail.com",
    nickName: "jj",
    pronouns: "He/Him/His",
    gender: "Male",
    birthdate: "3/15/1985",
    program: "Program #2",
    caseManagerName: "Susan Summers",
    caseManagerMobile: "4441234567",
    caseManagerEmail: "ldsafj@gmail.com",
    caseManagerWorkPhone: "4441234567",
    emergencyContactName: "Diane Summers",
    emergencyContactMobile: "1231234567",
    emergencyContactEmail: "kldadjf@email.com",
    emergencyContactWorkPhone: "3431234567",
    createdDateFront: "8/10/2022",
    createByFront: "Jane Doe",
    lastModifiedDateFront: "8/10/22",
    modifiedByFront: "Jane Doe",
  },
  {
    id: 2,
    firstName: "John3",
    lastName: "James",
    mobile: "4986741829",
    email: "slkjfdaf@gmail.com",
    nickName: "jj",
    pronouns: "He/Him/His",
    gender: "Male",
    birthdate: "3/15/1985",
    program: "Program #2",
    caseManagerName: "Susan Summers",
    caseManagerMobile: "4441234567",
    caseManagerEmail: "ldsafj@gmail.com",
    caseManagerWorkPhone: "4441234567",
    emergencyContactName: "Diane Summers",
    emergencyContactMobile: "1231234567",
    emergencyContactEmail: "kldadjf@email.com",
    emergencyContactWorkPhone: "3431234567",
    createdDateFront: "8/10/2022",
    createByFront: "Jane Doe",
    lastModifiedDateFront: "8/10/22",
    modifiedByFront: "Jane Doe",
  },
];

const initGuestData = [initGuests];

export const programTestData = [
  "Program #1",
  "Program #2",
  "Program #3",
  "Program #4",
];

export const userTestData = ["User #1", "User #2"];

const guestFormQuestions = {
  id: 0,
  firstName: "First Name",
  lastName: "Last Name",
  mobile: "Mobile Number",
  email: "Email Address",
  nickName: "Nickname",
  pronouns: "Gender Pronouns",
  gender: "Gender",
  birthdate: "Birthdate",
  program: "Program",
  caseManagerName: "Case Manager",
  caseManagerMobile: "Case Manager Mobile",
  caseManagerEmail: "Case Manager Email",
  caseManagerWorkPhone: "Case Manager Work Phone",
  emergencyContactName: "Emergency Contact",
  emergencyContactMobile: "Emergency Contact Mobile",
  emergencyContactEmail: "Emergency Contact Email",
  emergencyContactWorkPhone: "Emergency Contact Work Phone",
  createdDateFront: "",
  createByFront: "",
  lastModifiedDateFront: "",
  modifiedByFront: "",
};

function highestNumber(guests: GuestProps[]) {
  let high = 0;
  for (const ges of guests) {
    if (ges.id < 0) {
      return 0;
    }
    if (ges.id > high) {
      high = ges.id;
    }
  }
  return high + 1;
}

const sampleGuest = {
  id: -1,
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  nickName: "",
  pronouns: "",
  gender: "",
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
  createdDateFront: "",
  createByFront: "",
  lastModifiedDateFront: "",
  modifiedByFront: "",
}

// Add a guest
function makeNewGuest(guests: GuestProps[]) {
  // get the current highest id
  let newId = highestNumber(guests);
  // create the new resident with the highest id and all rest of stuff getting passed in
  const outputGuest = {...sampleGuest, id: newId };
  // combine old guests and new guest into new array
  const outGuests = { ...guests, ...outputGuest };
  return outGuests;
}

// function UpdateResident(residents: ResidentProps[], id: number) {}
function updateGuestInfo(guests: GuestProps[], id: number, edits: {}) {
  const newGuest = guests.map( (guest) => {
    if (guest.id === id) {
      const updatedGuest = {...guest, ...edits};
      guests = { ...guests, ...updatedGuest };
    }
  });
  return guests;
}

// remove a guest
function removeGuestInfo(residents: GuestProps[], id: number) {
  residents.filter((resident) => resident.id !== id);
  return residents;
}

const useGuestStore = create((set) => ({
  guests: [],
  addGuest: (guests: GuestProps[]) => set((state: any) => ({ guests: state.addGuest(guests) })),
  updateGuest: () => set(),
  removeGuest: () => set(),
}));

export default useGuestStore;