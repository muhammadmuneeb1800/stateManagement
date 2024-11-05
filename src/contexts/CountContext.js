import React, { createContext, useState } from "react";

export const CountContext = createContext();

export default function CountContextProvider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ firstName, setFirstName, count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
