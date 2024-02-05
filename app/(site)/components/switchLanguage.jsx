"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "/contexts/languageContext";
// import { LuLanguages } from "react-icons/lu";
import USAFlag from "/public/images/usa-flag.svg";
import JPFlag from "/public/images/japan-flag.svg";

const SwitchLanguage = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <button onClick={toggleLanguage} className="flex items-center px-2 gap-1">
        {language === "english" ? (
          <>
            <Image
              src={JPFlag}
              width={48}
              height={48}
              className="w-6 h-auto object-cover"
            />
            <h6>JP</h6>
          </>
        ) : (
          <>
            <Image
              src={USAFlag}
              width={48}
              height={48}
              className="w-6 h-auto object-cover"
            />
            <h6>EN</h6>
          </>
        )}
      </button>
    </>
  );
};

export default SwitchLanguage;
