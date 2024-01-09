import React from "react";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";

const BackButton = ({ language }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      className="bg-primary-color hover:bg-primary-color-hover text-neutral-50 dark:text-neutral-50 rounded-3xl ps-3 pe-4 pt-1 pb-[6px] flex items-center text-xs"
      onClick={goBack}
    >
      <BsChevronLeft className="pt-0 sm:pt-[2px]" />
      {language === "english" ? "Back" : "戻る"}
    </button>
  );
};

export default BackButton;
