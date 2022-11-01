import React from "react";
import ReactDOM from "react-dom/client";
import useGuestStore from "./store/guestStore";
import { Routes, Route, Outlet, Link } from 'react-router-dom'

import GuestUserForm1 from "./routes/forms/guestUserForm1";
import GuestUserForm2 from "./routes/forms/guestUserForm1";
import GuestUserForm3 from "./routes/forms/guestUserForm1";
import GuestUserForm4 from "./routes/forms/guestUserForm1";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<GuestUserForm1 />} />
          <Route path="2" element={<GuestUserForm2 />} />
          <Route path="3" element={<GuestUserForm3 />} />
          <Route path="4" element={<GuestUserForm4 />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Guest1</Link>
        </li>
        <li>
          <Link to="/2">Guest2</Link>
        </li>
        <li>
          <Link to="/3">Guest3</Link>
        </li>
        <li>
          <Link to="/4">Guest4</Link>
        </li>
      </ul>
    </nav>

    <hr />
    
    <Outlet />
  </>
  )
}

export default App;
