"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Check if window is defined (client side) before accessing localStorage
  const initialLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "english"
      : "english";

  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save the selected language to localStorage whenever it changes
      localStorage.setItem("language", language);
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "english" ? "japanese" : "english";
    setLanguage(newLanguage);

    // Reload the page only if you want to force a full reload
    window.location.reload();
  };

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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
