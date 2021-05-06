import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allows us to pukk information from the data leyer
export const useStateValue = () => useContext(StateContext);
