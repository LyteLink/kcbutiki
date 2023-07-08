"use client";

import { reducer } from "./reducer";

const { createContext, useReducer, useContext } = require("react");

const UiContext = createContext({ isSidebarOpen: false });
const initialState = {
  isSidebarOpen: false,
};

const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UiContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;

export const useUiContext = () => useContext(UiContext);
