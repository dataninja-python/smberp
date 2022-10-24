import create from "zustand";
import { RandomUUIDOptions } from "crypto";
import { devtools, persist } from "zustand/middleware";

// note: see typescript string literal types
type GenderPronouns = "She/Her/Hers" | "He/Him/His" | "They/Them/Theirs" | "Ze/Zir/Zirs";

interface GuestProps {
  gId: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  nickName: string;
  gender: string;
  genderPronouns: GenderPronouns;
  birthdate: any;
  program: string;
  caseManagerName: string;
  caseManagerMobile: string;
  caseManagerEmail: string;
  caseManagerWorkPhone: string;
  emergencyContactName: string;
  emergencyContactMobile: string;
  emergencyContactEmail: string;
  emergencyContactWorkPhone: string;
  createdDateFrontend: any;
  createByFrontend: any;
  lastModifiedDateFrontend: any;
  modifiedByFrontend: any;
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