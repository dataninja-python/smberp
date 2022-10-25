import React from 'react';
import useGuestStore from '../store/guestStore';

export default function Guests() {
    const [index, setIndex] = React.useState(0);
    const { guests } = useGuestStore();
    return (
        <>
        {guests.length ? <p>Nothing</p> : <p>Something</p>}
        </>
    )
}