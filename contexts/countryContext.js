"use client";
import React, { createContext, useContext, useState } from "react";

// Create a new context
const CountryContext = createContext();

// Create a context provider component
export function CountryProvider({ children }) {
  const [country, setCountry] = useState("");

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

// Create a custom hook for accessing the context value
export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
}
