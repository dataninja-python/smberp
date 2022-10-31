import React from 'react'
import useGuestStore from '../../../store/guestStore'
import BackButton from '../components/backBtn'
import NextButton from '../components/nextBtn'

export default function GuestForm2() {
    const [selected, setSelected] = React.useState("");
    const pronouns = useGuestStore((state: any) => state.genderPronouns)
    function handleChange(e:any) {
        setSelected(() => e.target.value)
    }
    
    return (
        <>
        <form>
            <div className='row'>
                <div className='four columns'>
                    <label>Nick Name</label>
                    <input className='u-full-width' type="text" placeholder='nick name' />
                </div>
                <div className='four columns'>
                    <label>Gender</label>
                    <input className='u-full-width' type="text" placeholder='Gender' />
                </div>
            </div>
            <div className='row'>
                <div className='four columns'>
                    <label>Gender Pronouns</label>
                    <select value={selected} onChange={handleChange}>
                        {pronouns.map((pronoun:string) => (
                                <option key={pronouns.indexOf(pronoun)}>{pronoun}</option>
                            ))}
                    </select>
                </div>
                <div className='four columns'>
                    <label>Birthday</label>
                    <input className='u-full-width' type="date" placeholder='Birthday' />
                </div>
            </div>
        </form>
        </>
    )
}