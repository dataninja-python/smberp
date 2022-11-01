import React from 'react'
import useGuestStore from '../../../store/guestStore'
import BackButton from '../components/backBtn'
import NextButton from '../components/nextBtn'

export default function GuestForm1() {
    const guests = useGuestStore((state:any) => state.guests)
    const initPage = useGuestStore((state:any) => state.initialPageNumber);
    const page = useGuestStore((state:any) => state.currentPageNumber);
    const maxPage = useGuestStore((state:any) => state.maximumPageNumber);
    const newGuestId = useGuestStore((state:any) => state.createGId)
    const { addGuest, updateGuest,setActiveId, back, next, } = useGuestStore()
    setActiveId(newGuestId)
    function handleChange() {
        // updates data which is already created
        
    }
    return (
        <>
            <form onChange={handleChange}>
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