import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import useRouteStore from "./store/routesStore";


function App() {
  const { router } = useRouteStore();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
