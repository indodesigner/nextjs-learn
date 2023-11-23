"use client";
import React, { createContext, useContext, useState, useMemo } from "react";

// Create a context with default values
const LanguageContext = createContext();

// Create a provider component to wrap your app
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english"); // Default language is English

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "japanese" : "english"
    );
  };

  // Memoize the context value
  const contextValue = useMemo(
    () => ({ language, toggleLanguage }),
    [language, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to easily access the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// before memoization of context just a backup delete before deploying
// "use client";
// import React, { createContext, useContext, useState } from "react";

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("english"); // Default language is English

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) =>
//       prevLanguage === "english" ? "japanese" : "english"
//     );
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };
