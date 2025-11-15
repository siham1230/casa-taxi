import { create } from "zustand";

export const useRideStore = create((set) => ({
    depart: null,
    destination: null,
    distance: 0,


    setDepart: (value) => set({ depart: value }),
    setDestination: (value) => ({ destination: value }),
    setDistance: (value) => set({ distance: value }),
})
);