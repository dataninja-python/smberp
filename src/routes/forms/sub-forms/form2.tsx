import React from 'react'
import useGuestStore from '../../../store/guestStore'
import BackButton from '../components/backBtn'
import NextButton from '../components/nextBtn'

export default function GuestForm2() {
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
                    <label>First Name</label>
                    <input className='u-full-width' type="text" placeholder='first' />
                </div>
                <div className='four columns'>
                    <label>Last Name</label>
                    <input className='u-full-width' type="text" placeholder='Last' />
                </div>
            </div>
            <div className='row'>
                <div className='four columns'>
                    <label>Mobile Phone</label>
                    <input className='u-full-width' type="text" placeholder='Mobile' />
                </div>
                <div className='four columns'>
                    <label>Email Address</label>
                    <input className='u-full-width' type="email" placeholder='Email' />
                </div>
            </div>
        </form>
        </>
    )
}