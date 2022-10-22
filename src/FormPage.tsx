import React from "react";
import "./assets/css/norm.css";
import "./assets/css/base.css";

import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";

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
            {step}
            <div className="row">
              <div className="nine columns">
                <span style={{ color: "white" }}>aslfjal</span>
              </div>
              <div>
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
