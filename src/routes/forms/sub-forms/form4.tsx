import React from 'react'
import useGuestStore from '../../../store/guestStore'
import BackButton from '../components/backBtn'
import NextButton from '../components/nextBtn'

export default function GuestForm4() {
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
                    <label>Emergency Contact Name</label>
                    <input className='u-full-width' type="text" placeholder='First Name' />
                </div>
                <div className='four columns'>
                    <label>Emergency Contact Last Name</label>
                    <input className='u-full-width' type="text" placeholder='Last Name' />
                </div>
            </div>
            <div className='row'>
                <div className='four columns'>
                    <label>Emergency Contact Mobile Phone</label>
                    <input className='u-full-width' type="text" placeholder='Email' />
                </div>
                <div className='four columns'>
                    <label>Emergency Contact Work Phone</label>
                    <input className='u-full-width' type="email" placeholder='Work Phone' />
                </div>
            </div>
        </form>
        </>
    )
}