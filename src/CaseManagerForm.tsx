import { FormWrapper } from "./FormWrapper"

interface CaseManagerData {
  program: string;
  caseManagerName: string;
  caseManagerMobile: string | number;
  caseManagerEmail: string;
  caseManagerWorkPhone: string | number;
}
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


type CaseManagerFormProps = CaseManagerData & {
  updateFields: (fields: Partial<CaseManagerData>) => void
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

export function CaseManagerForm({
  program,
  caseManagerName,
  caseManagerMobile,
  caseManagerEmail,
  caseManagerWorkPhone,
  updateFields,
}: CaseManagerFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>Program</label>
      <input
        autoFocus
        required
        type="text"
        value={program}
        onChange={e => updateFields({ program: e.target.value })}
      />
      <label>Case Manager Name</label>
      <input
        required
        type="text"
        value={caseManagerName}
        onChange={e => updateFields({ caseManagerName: e.target.value })}
      />
      <label>Case Manager Mobile</label>
      <input
        required
        type="text"
        value={caseManagerMobile}
        onChange={e => updateFields({ caseManagerMobile: e.target.value })}
      />
      <label>Case Manager Email</label>
      <input
        required
        type="email"
        value={caseManagerEmail}
        onChange={e => updateFields({ caseManagerEmail: e.target.value })}
      />
      <label>Case Manager Work Phone</label>
      <input
        required
        type="text"
        value={caseManagerWorkPhone}
        onChange={e => updateFields({ caseManagerWorkPhone: e.target.value })}
      />
    </FormWrapper>
  )
}