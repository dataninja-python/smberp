import create from "zustand";

import { devtools, persist } from "zustand/middleware";

interface GenderPronouns {
  pronouns: "She/Her/Hers" | "He/Him/His" | "They/Them/Theirs" | "Ze/Zir/Zirs";
}

interface ResidentProps {
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

const initResidents = [
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

const initResidentData = [initResidents];

export const programTestData = [
  "Program #1",
  "Program #2",
  "Program #3",
  "Program #4",
];

export const userTestData = ["User #1", "User #2"];

const residentFormQuestions = {
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

function highestNumber(residents: ResidentProps[]) {
  let high = 0;
  for (const res of residents) {
    if (res.id < 0) {
      return 0;
    }
    if (res.id > high) {
      high = res.id;
    }
  }
  return high;
}

function AddResident(residents: ResidentProps[], resident: ResidentProps) {
  let workingResident = resident;
  // get the current highest id
  let newId = highestNumber(residents);
  // create the new resident with the highest id and all rest of stuff getting passed in
  workingResident = { ...workingResident, id: newId };
  // combine old residents and old residents into new array
  residents = { ...residents, ...workingResident };
}
// function UpdateResident(residents: ResidentProps[], id: number) {}
function RemoveResident(residents: ResidentProps[], id: number) {
  residents.filter((resident) => resident.id !== id);
}
