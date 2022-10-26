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
          <form className="form-center form-top-room">
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
                <FormPages />
                </div>
              <div className="three columns"><>&nbsp;</></div>
            </div>
            <div className="row">
            <div className="three columns"><>&nbsp;</></div>
            <div className="five columns"><>&nbsp;</></div>
            <div className="four columns">
              <ButtonSection />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

function Counter() {
  const current = useGuestStore((state: any) => state.currentPage)
  const maxPages = useGuestStore((state: any) => state.maxPage)
  return(
    <>
    <div className="form-counter">
      {current} of {maxPages}
    </div>    
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
  const add = useGuestStore((state:any) => state.next)
  const sub = useGuestStore((state:any) => state.back)
  return (
    <>
    <button onClick={sub}>-</button>
    <button onClick={add}>+</button>
    </>
  )
}

export default App;
