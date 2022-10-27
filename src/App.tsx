import React from "react";
import ReactDOM from "react-dom/client";
import useGuestStore from "./store/guestStore";
import './assets/css/norm.css'
import './assets/css/base.css'
import './assets/css/forms.css'

function App() {

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
            <div className="three columns"><>&nbsp;</></div>
              <div className="six columns">
                <p>Hello</p>
                </div>
              <div className="three columns"><>&nbsp;</></div>
            </div>
            <div className="row">
            <div className="three columns"><>&nbsp;</></div>
            <div className="five columns"><>&nbsp;</></div>
            <div className="four columns">
              <BackButton />
              <NextButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function Counter() {
  const page = useGuestStore((state: any) => state.currentPage)
  const max = useGuestStore((state: any) => state.maxPageNum);
  return (
    <>
    <p>{page} of {max}</p>
    </>
  )
}

function BackButton() {
  const back = useGuestStore((state: any) => state.back)
  return (
  <>
    <button onClick={back}>-</button>
  </>
  )
}

function NextButton() {
  const next = useGuestStore((state: any) => state.next)
  return (
  <>
    <button onClick={next}>-</button>
  </>
  )
}

export default App;
