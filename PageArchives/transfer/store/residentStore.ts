import create from 'zustand'

import {devtools, persist} from 'zustand/middleware'

interface GenderPronouns {
    pronouns: "She/Her/Hers" | "He/Him/His" | "They/Them/Theirs" | "Ze/Zir/Zirs";
}

interface ResidentProps {
    residentId: number;
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


export const residentData = {
    residentId: -1,
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
