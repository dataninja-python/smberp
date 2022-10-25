import create from "zustand";
import { getDiffieHellman, RandomUUIDOptions } from "crypto";
import { devtools, persist } from "zustand/middleware";
import { isMatchWith } from "lodash";
import Root from "../routes/root";
import ErrorPage from "../routes/error-page";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import React from "react";
import { JsxElement } from "typescript";
  
export interface TSXProps {
    path: string;
    element: React.ReactNode;
    errorElement: React.ReactNode;
}

const initRouteData: TSXProps[] = [
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    
]
  const router = createBrowserRouter(initRouteData);


const useRouteStore = create((set) => ({
  routes: [],
  router: router,

}));

export default useRouteStore