import React from "react";
import ReactDOM from "react-dom/client";
import useGuestStore from "./store/guestStore";

function App() {
  const addGuest = useGuestStore((state: any) => {state.addGuest});
  const guests = useGuestStore((state: any) => {state.guests});

  return (
    <>
    <div className="container">
      <p>Guests</p>
      {guests}
      <div>
        <button onClick={addGuest}>add guest</button>
      </div>
    </div>
    </>
  );
}

export default App;
