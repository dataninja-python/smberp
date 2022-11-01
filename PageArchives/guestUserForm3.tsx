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



export default function GuestUserForm2() {
  const [selected, setSelected] = React.useState("");
  const initPage = useGuestStore((state:any) => state.initialPageNumber);
  const programs = useGuestStore((state:any) => state.genderPronouns)
  const page = useGuestStore((state:any) => state.currentPageNumber);
  const maxPage = useGuestStore((state:any) => state.maximumPageNumber);
  const back = useGuestStore((state:any) => state.back)
  const next = useGuestStore((state:any) => state.next)
  const newGuestId = useGuestStore((state:any) => state.createGId)
  const guests = useGuestStore((state:any) => state.guests)
  const { addGuest, updateGuest,setActiveId } = useGuestStore()
  setActiveId(newGuestId)
  const [index, setIndex] = React.useState(initPage - 1)

  const handleBack = (e:any) => {
    back()
  }

  function handleChange(e:any) {
    if( page === initPage && guests[-1].gId !== newGuestId) { 
      addGuest(newGuestId) 
    } else {
      updateGuest(newGuestId, e.target.value)
    }
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
              <div className="two columns"><>&nbsp;</></div>
              <div className="six columns">
              <>&nbsp;</>
                </div>
              <div className="two columns">
                <div className="form-counter">{page} of {maxPage}</div>
              </div>
            </div>
            <div className="row">
            <div className='row'>
                <div className='four columns'>
                    <label>Programs</label>
                    <select value={selected} onChange={handleChange}>
                        {programs.map((program:string) => (
                                <option key={program.indexOf(program)}>{program}</option>
                            ))}
                    </select>
                </div>
                <div className='four columns'>
                    <label>Case Manager Name</label>
                    <input className='u-full-width' type="text" placeholder='Full Name' onChange={handleChange} />
                </div>
            </div>
            <div className='row'>
                <div className='four columns'>
                    <label>Case Manager Mobile Phone</label>
                    <input className='u-full-width' type="text" placeholder='Mobile' onChange={handleChange} />
                </div>
                <div className='four columns'>
                    <label>Case Manager Email Address</label>
                    <input className='u-full-width' type="email" placeholder='Email' onChange={handleChange} />
                </div>
                <div className='four columns'>
                    <label>Case Manager Work Phone</label>
                    <input className='u-full-width' type="email" placeholder='Work Phone' onChange={handleChange} />
                </div>
            </div>
            </div>
            <div className="row">
            <div className="two columns"><>&nbsp;</></div>
            <div className="three columns"><>&nbsp;</></div>
            <div className="six columns">
             {page === initPage ? <button disabled>back</button> : <button className="form-btn" onClick={handleBack}>back</button>}
             {page === maxPage ? <button disabled>next</button> : <button className="form-btn" onClick={handleNext}>next</button>}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}