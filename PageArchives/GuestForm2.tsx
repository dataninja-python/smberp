import React, {useState, useEffect, ChangeEvent} from 'react'
import { FormWrapper } from "./FormWrapper"

type Guest2Data = {
  nickName: string,
  gender: string,
  genderPronouns: string,
  birthdate: string,
}

interface GuestProps {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string | number;
  email: string;
  nickName: string;
  gender: string;
  genderPronouns: string;
  birthdate: string | any;
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

type Guest2FormProps = GuestProps & {
  updateFields: (fields: Partial<GuestProps>) => void
}
export function GuestForm2({
  nickName,
  gender,
  genderPronouns,
  birthdate,
  updateFields,
}: Guest2FormProps) {

  const [value, setValue] = useState("")

  interface GenderPronouns {
    pronouns: "She/Her/Hers" | "He/Him/His" | "They/Them/Theirs" | "Ze/Zir/Zirs";
  }
  const genderOptions = [
    {
      id: 0,
      label: "She/Her/Hers",
      value: "She/Her/Hers"
    },
    {
      id: 1,
      label: "He/He/His",
      value: "He/He/His"
    },
    {
      id: 2,
      label: "They/Them/Theirs",
      value: "They/Them/Theirs"
    },
    {
      id: 3,
      label: "Ze/Zir/Zirs",
      value: "Ze/Zir/Zirs"
    },
  ] 
  
  function handleValue(event: any) {
    const obj = event.target.value
    setValue(obj.value)
  }

  useEffect(() => {
    updateFields({ genderPronouns: value })
  }, [value])

  return (
    <FormWrapper title="User Details">
      <label>Nickname</label>
      <input
        autoFocus
        type="text"
        value={nickName}
        onChange={e => updateFields({ nickName: e.target.value })}
      />
      <label>Gender</label>
      <input
        required
        type="text"
        value={gender}
        onChange={e => updateFields({ gender: e.target.value })}
      />
      <label>Gender Pronouns</label>
      <select className="u-full-width" id="genderPronouns" value={value} onChange={handleValue}>
        {genderOptions.map((option) => (
          <option key={option.id} value={option.value}>{option.label}</option>
        ))}
      </select>
      <input
        required
        type="date"
        value={birthdate}
        onChange={e => updateFields({ birthdate: e.target.value })}
      />
    </FormWrapper>
  )
}