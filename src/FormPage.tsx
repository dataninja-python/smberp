import React from "react";
import "./assets/css/norm.css";
import "./assets/css/base.css";

import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";
import { isTemplateExpression } from "typescript";

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
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
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
