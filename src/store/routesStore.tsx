import create from "zustand";
import { getDiffieHellman, RandomUUIDOptions } from "crypto";
import { devtools, persist } from "zustand/middleware";
import { isMatchWith } from "lodash";
import Root from "../routes/root";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import React from "react";
import { JsxElement } from "typescript";
  
interface TSXProps {
    path: string;
    element: React.ReactNode;
}

const initRouteData: TSXProps[] = [
    {
        path: "/",
        element: <Root />,
    },
]
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);


const useGuestStore = create((set: any) => ({
  routes: [],
  activeRouteId: 0,
  createGuest: (guest: any) => set(
    (state: any) => ({
      guests: [
        ...state.guests,
        {
          gId: self.crypto.randomUUID(),
          page1: { ...state.page1 },
          page2: { ...state.page2 },
          page3: { ...state.page3 },
          page4: { ...state.page4 },
          extraInfo: { 
            createdDateFrontend: Date.now(),
            createdByFrontend: "AJ",
            lastModifiedDateFrontend: Date.now(),
            modifiedByFrontend: "AJ",
          },
        }
      ]
    })),
    updateGuest: (id: any) => set((state:any) => ({
      guests: state.guests.map(((guest: any) => {
        if(id === guest.id) {
          return {
            ...guest,
            lastModifiedDateFrontend: Date.now(),
            modifiedByFrontend: "AJ",
            gId: guest.id
          }
        } else {
          return guest
        }
      })),
    })),
    removeGuest: (id: any) => set((state:any) => ({
      guests: state.guests.filter((guest:any) => guest.id !== id)
    })),
    nextPage: () => set((state: any) => ({
      currentPage: Math.min(state.currentPage + 1, state.maxPages)
    } )),
    prevPage: () => set((state: any) => ({
      currentPage: Math.max(state.currentPage - 1, 1)
    })),
    resetForm: () => set({ currentPage: 1 })
}));

export default useRouteStore