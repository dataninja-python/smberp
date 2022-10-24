import { FormWrapper } from "./FormWrapper"

type Guest1Data = {
  gId: number,
  firstName: string,
  lastName: string,
  mobile: string,
  email: string,
}

type Guest1FormProps = Guest1Data & {
  updateFields: (fields: Partial<Guest1Data>) => void
}

export function GuestForm1({
  gId,
  firstName,
  lastName,
  mobile,
  email,
  updateFields,
}: Guest1FormProps) {

  function addFirstGuest() {
    // there should only be 1 option to get a negative gId
    // this is when the only data is the init data
    // so, when adding first guest we should be replacing this first guest
    // otherwise we are adding new guest but confirm no edge cases
  }

  function addGuest() {
    // assumptively, the only way our gId is < 0 is the first 
    // time we try to add a guest to the initial form data
    // do not purely operate on this assumption; use erlang learnings to
    // periodically, have system check this is not a possibility
    // also, make sure that automatons can self-correct if they run into issues
    // with gId and other problems or at least can identy when a problem somewhere
  }

  
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