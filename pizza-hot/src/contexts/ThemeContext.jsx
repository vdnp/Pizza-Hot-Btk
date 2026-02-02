import { createContext, useReducer, useState } from "react";
import { themeReducer } from "../reducers/ThemeReducer";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "primary",
    mode: "light",
  });

  function changeColor(newColor) {
    dispatch({ type: "SET_COLOR", payload: newColor });
  }

  function changeMode(newMode) {
    dispatch({ type: "SET_MODE", payload: newMode });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
