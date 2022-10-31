import React from 'react'
import useGuestStore from '../../../store/guestStore'
import BackButton from '../components/backBtn'
import NextButton from '../components/nextBtn'

export default function GuestForm3() {
    const [selected, setSelected] =  React.useState("")
    const programs = useGuestStore((state) => state.programs)
    function handleChange(e:any) {
        setSelected(() => e.target.value)
    }
    function handleBack(e:any) {
        e.preventDefault()
        console.log("error")
    }
    function handleNext(e:any) {
        e.preventDefault()
        console.log("error")
    }
    return (
        <>
        <form>
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
                    <input className='u-full-width' type="text" placeholder='Full Name' />
                </div>
            </div>
            <div className='row'>
                <div className='four columns'>
                    <label>Case Manager Mobile Phone</label>
                    <input className='u-full-width' type="text" placeholder='Mobile' />
                </div>
                <div className='four columns'>
                    <label>Case Manager Email Address</label>
                    <input className='u-full-width' type="email" placeholder='Email' />
                </div>
                <div className='four columns'>
                    <label>Case Manager Work Phone</label>
                    <input className='u-full-width' type="email" placeholder='Work Phone' />
                </div>
            </div>
        </form>
        </>
    )
}