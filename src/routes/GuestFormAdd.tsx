import '../assets/css/norm.css'
import '../assets/css/base.css'

import useGuestStore from '../store/guestStore'

export default function GuestFormAdd() {
    const { addNewGuest } = useGuestStore()
    const handleAdd = () => {
        addNewGuest()
    }

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className='three columns'>&nbsp;</div>
                    <div className="six columns">
                        <h4>Create A New Guest?</h4>
                    </div>
                    <div className="three columns">
                        <button onClick={handleAdd}>Add Guests</button>
                    </div>
                </div>
            </div>
        </>
    )
}