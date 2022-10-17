import React from "react"
import './assets/norm.css'
//import './assets/base.css'

import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
  }

  return (
    <div className="container grid">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="twelve columns"></div>
            <div className="one column">{currentStepIndex + 1} / {steps.length}</div>
        </div>
        {step}
        <div>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
