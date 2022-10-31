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
import GuestForm2 from './sub-forms/form2'
import GuestForm3 from './sub-forms/form3'
import GuestForm4 from './sub-forms/form4'

export default function GuestForms() {
  const initPage = useGuestStore((state:any) => state.initPageNum);
  let currentPage: number = useGuestStore((state:any) => state.curentPage);
  const [index, setIndex] = React.useState(initPage - 1)
  
  React.useEffect(() => {
    setIndex((currentPage - 1)
  }, [currentPage])

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