import React from "react";
import ReactDOM from "react-dom/client";
import useGuestStore from "./store/guestStore";
import './assets/css/norm.css'
import './assets/css/base.css'



function App() {
  

  return (
    <>
    <form>
      <div>
        <Counter />
      </div>
      <div>
        <FormPages />
      </div>
      <div>
        <ButtonSection />
      </div>
    </form>
    </>
  );
}

function Counter() {
  return(
    <>
    <p>1</p> of <p>X</p>
    </>
  )
}

function FormPages() {
  return (
    <>
    <p>Form Page</p>
    </>
  )
}

function ButtonSection() {
  return (
    <>
    <button>+</button>
    <button>+</button>
    </>
  )
}

export default App;
