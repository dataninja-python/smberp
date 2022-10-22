import { FormWrapper } from "./FormWrapper"

type Guest1Data = {
  firstName: string,
  lastName: string,
  mobile: string,
  email: string,
}

type Guest1FormProps = Guest1Data & {
  updateFields: (fields: Partial<Guest1Data>) => void
}

export function GuestForm1({
  firstName,
  lastName,
  mobile,
  email,
  updateFields,
}: Guest1FormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Mobile</label>
      <input
        required
        type="text"
        value={mobile}
        onChange={e => updateFields({ mobile: e.target.value })}
      />
      <label>email</label>
      <input
        type="text"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  )
}