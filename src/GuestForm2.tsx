import React, {useState, useEffect, ChangeEvent} from 'react'
import { FormWrapper } from "./FormWrapper"

type Guest2Data = {
  nickName: string,
  gender: string,
  genderPronouns: string,
  birthdate: string,
}

type Guest2FormProps = Guest2Data & {
  updateFields: (fields: Partial<Guest2Data>) => void
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