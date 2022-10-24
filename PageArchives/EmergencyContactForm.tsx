import { FormWrapper } from "./FormWrapper"

type AddressData = {
  street: string
  city: string
  state: string
  zip: string
}

interface EmergencyData {
  emergencyContactName: string;
  emergencyContactMobile: string | number;
  emergencyContactEmail: string;
  emergencyContactWorkPhone: string | number;
  createdDateFrontend?: string | Date;
  createByFrontend?: string | number;
  lastModifiedDateFrontend?: string | Date;
  modifiedByFrontend?: string | Date;
}

type EmergencyFormProps = EmergencyData & {
  updateFields: (fields: Partial<EmergencyData>) => void
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

export function EmergencyContactForm({
  emergencyContactName,
  emergencyContactMobile,
  emergencyContactEmail,
  emergencyContactWorkPhone,
  updateFields,
}: EmergencyFormProps) {
  return (
    <FormWrapper title="Address">
      <label>Emergency Contact Name:</label>
      <input
        autoFocus
        required
        type="text"
        value={emergencyContactName}
        onChange={e => updateFields({ emergencyContactName: e.target.value })}
      />
      <label>Emergency Contact Mobile</label>
      <input
        required
        type="text"
        value={emergencyContactMobile}
        onChange={e => updateFields({ emergencyContactMobile: e.target.value })}
      />
      <label>Email</label>
      <input
        required
        type="text"
        value={emergencyContactEmail}
        onChange={e => updateFields({ emergencyContactEmail: e.target.value })}
      />
      <label>Emergency Contact Work Phone</label>
      <input
        required
        type="text"
        value={emergencyContactWorkPhone}
        onChange={e => updateFields({ emergencyContactWorkPhone: e.target.value })}
      />
    </FormWrapper>
  )
}