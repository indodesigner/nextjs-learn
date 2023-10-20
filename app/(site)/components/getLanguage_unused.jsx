"use client";
import { useLanguage } from "/contexts/languageContext";

const GetLanguage = () => {
  const { language } = useLanguage();

  return (
    <>
      <p>{language === "english" ? "English" : "Japanese"}</p>
    </>
  );
};

export default GetLanguage;
