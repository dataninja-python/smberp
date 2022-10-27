import React from "react";
import ReactDOM from "react-dom/client";
import useGuestStore from "./store/guestStore";
import './assets/css/norm.css'
import './assets/css/base.css'
import './assets/css/forms.css'

function App() {
  const { currentPage, maxPage, goBack, goNext } = useGuestStore();

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
              <Counter currentPage={currentPage} maxPage={maxPage} />
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
              <ButtonSection goBack={goBack} goNext={goNext}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function Counter(props: any) {
  //const pageNum = useGuestStore((state: any) => state.currentPage)
  //const maxPageNum = useGuestStore((state: any) => state.maxPage)
  return(
    <>
    <div className="form-counter">
      {props.currentPage} of {props.maxPage}
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

function ButtonSection(props: any) {
  //const add = useGuestStore((state:any) => state.goBack)
  //const sub = useGuestStore((state:any) => state.Next)
  return (
    <>
    <button onClick={() => props.sub()}>-</button>
    <button onClick={() => props.add()}>+</button>
    </>
  )
}

export default App;
