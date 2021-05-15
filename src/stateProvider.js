import React, { createContext, useContext, useReducer } from 'react';

// Prepare the datalayer
export const StateContext = createContext();

// Wrap our app and provide the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from data layer
export const useStatevalue = () => useContext(StateContext);
