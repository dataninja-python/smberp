import React from "react";
import ReactDOM from "react-dom/client";
import useGuestStore from "../../store/guestStore";
import '../../assets/css/norm.css'
import '../../assets/css/base.css'
import '../../assets/css/forms.css'

//import Counter from './components/counter';
//import BackBtn from './components/backBtn';
//import NextBtn from './components/nextBtn';

import GuestForm1 from './sub-forms/form1'
import GuestForm2 from './sub-forms/form2'
import GuestForm3 from './sub-forms/form3'
import GuestForm4 from './sub-forms/form4'

const formElemenmts = [
  <GuestForm1 />,
  <GuestForm2 />,
  <GuestForm3 />,
  <GuestForm4 />,
]

export default function GuestForms() {
  const initPage = useGuestStore((state:any) => state.initialPageNumber);
  const page = useGuestStore((state:any) => state.curentPageNumber);
  const maxPage = useGuestStore((state:any) => state.maximumPageNumber);
  const back = useGuestStore((state:any) => state.back);
  const next = useGuestStore((state:any) => state.next);
  const newGuestId = useGuestStore((state:any) => state.createGId)
  const [index, setIndex] = React.useState(initPage - 1)
  
  React.useEffect(() => {
    setIndex(page - 1)
  }, [page])

  const handleBack = (e:any) => {
    back()
  }
  const handleNext = (e:any) => {
    next()
  }

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
                {page} of {maxPage}
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
            <div className="three columns"><>&nbsp;</></div>
            <div className="six columns">
             {page === initPage ? <button disabled>back</button> : <button onClick={handleBack} className="button-primary">back</button>}
             {page === maxPage ? <button disabled>next</button> : <button onClick={handleNext} className="button-primary">next</button>}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}