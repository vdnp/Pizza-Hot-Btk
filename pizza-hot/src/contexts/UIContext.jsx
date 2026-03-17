import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIContextProvider({ children }) {
  const [uiProgress, setUIProgress] = useState("");

  function showCart() {
    setUIProgress("cart");
  }

  function hideCart() {
    setUIProgress("");
  }

  function showCheckOut() {
    setUIProgress("checkout");
  }

  function hideCheckOut() {
    setUIProgress("");
  }

  const uiProgressContext = {
    uiProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  return (
    <UIContext.Provider value={uiProgressContext}>
      {children}
    </UIContext.Provider>
  );
}
