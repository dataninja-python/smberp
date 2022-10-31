import React from "react";
import ReactDOM from "react-dom/client";
import useGuestStore from "./store/guestStore";
//import './assets/css/norm.css'
//import './assets/css/base.css'
//import './assets/css/forms.css'

//import Counter from './routes/forms/components/counter';
//import BackBtn from './routes/forms/components/backBtn';
//import NextBtn from './routes/forms/components/nextBtn';

import GuestForms from "./routes/forms/guestForm";

function App() {

  return (
    <>
    <GuestForms />
    </>
  );
}

export default App;
