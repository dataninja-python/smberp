import React from "react";
import "./assets/css/norm.css";
import "./assets/css/base.css";

import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";
import { isTemplateExpression } from "typescript";

import { useMultistepFormGuest } from "./useMultistepFormGuest";
import { GuestForm1 } from "./GuestForm1";
import { GuestForm2 } from "./GuestForm2";
import { CaseManagerForm } from "./CaseManagerForm";
import { EmergencyContactForm } from "./EmergencyContactForm";

interface GenderPronouns {
  pronouns: "She/Her/Hers" | "He/Him/His" | "They/Them/Theirs" | "Ze/Zir/Zirs";
}

interface GuestProps {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  nickName: string;
  gender: string;
  genderPronouns: string;
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
  createByFrontend: string;
  lastModifiedDateFrontend: any;
  modifiedByFrontend: any;
}

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

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

function nextId(arr: []) {
  let high = 0
  for obj of arr {
    if (obj.id < 0) {
      return 0
    }
    if (obj.id > high) {
      high = obj.id
    }
  }
  return high + 1
}

function FormPage() {
  const [data, setData] = useState(sampleGuest);
  function updateFields(fields: Partial<GuestProps>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <GuestForm1 {...data} updateFields={updateFields} />,
      <GuestForm2 {...data} updateFields={updateFields} />,
      <CaseManagerForm {...data} updateFields={updateFields} />,
      <EmergencyContactForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="six columns">
                <span style={{ color: "white" }}>{" "}</span>
              </div>
              <div className="six columns">
                <span style={{ color: "black", font: "bold" }}>
                  {currentStepIndex + 1}
                </span>{" "}
                / <span>{steps.length}</span>
              </div>
            </div>
            <div className="container">
            {step}
            </div>
            <div className="row">
              <div className="eight columns">
                <span style={{ color: "white" }}>aslfjal</span>
              </div>
              <div className="three columns">
                <span style={{ margin: "0 0.5rem" }}>
                  {!isFirstStep && (
                    <button type="button" onClick={back}>
                      Back
                    </button>
                  )}
                </span>
                <span style={{ margin: "0 0.5rem" }}>
                  <button type="submit">
                    {isLastStep ? "Finish" : "Next"}
                  </button>
                </span>
              </div>
            </div>
          </form>
  );
}

export default FormPage;
