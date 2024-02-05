"use client";
import React from "react";
import { useLanguage } from "/contexts/languageContext";
import { LuLanguages } from "react-icons/lu";

const SwitchLanguage = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <button
        onClick={toggleLanguage}
        className="flex items-center px-2 gap-2 bg-neutral-200 dark:bg-neutral-700 rounded-md"
      >
        <LuLanguages />
        <h6>{language === "english" ? "JP" : "EN"}</h6>
      </button>
    </div>
  );
};

export default SwitchLanguage;
