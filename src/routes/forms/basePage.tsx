import React from "react";
import ReactDOM from "react-dom/client";
import useGuestStore from "../../store/guestStore";
import '../../assets/css/norm.css'
import '../../assets/css/base.css'
import '../../assets/css/forms.css'

import Counter from './components/counter';
import BackBtn from './components/backBtn';
import NextBtn from './components/nextBtn';

import GuestForm1 from './sub-forms/form1'

export default function GuestForms() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="two-half column">
          <div className="form-center form-top-room">
            <div className="row">
              <div className="three columns"><>&nbsp;</></div>
              <div className="six columns">
              <>&nbsp;</>
                </div>
              <div className="three columns">
                <Counter />
              </div>
            </div>
            <div className="row">
            <div className="two columns"><>&nbsp;</></div>
              <div className="eight columns">
                <GuestForm1 />
                </div>
              <div className="two columns"><>&nbsp;</></div>
            </div>
            <div className="row">
            <div className="three columns"><>&nbsp;</></div>
            <div className="six columns"><><BackBtn /><NextBtn /></></div>
            <div className="three columns"><>&nbsp;</></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}