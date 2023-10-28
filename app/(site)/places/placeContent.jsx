"use client";
import React from "react";
import { RichTextComponents } from "/utils/RichTextComponents";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";
import CommonCarousel from "@/components/commonCarousel";
import { useLanguage } from "/contexts/languageContext";

const PlaceContent = ({ place, slides, country }) => {
  const { language } = useLanguage();

  return (
    <>
      <div className="flex items-center mb-3">
        <Link href="/places" className="gradient-text">
          {language === "english" ? "Destinations" : "目的地"}
        </Link>
        <h6 className="text-sm">
          <BsChevronRight className="pt-[2px]" />
        </h6>
        <Link
          href={`/${country}`}
          className=" text-neutral-500 dark:text-neutral-400"
        >
          {language === "english" ? place.country : place.countryjp}
        </Link>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold mb-2">
        {language === "english"
          ? place.placeName
          : place.placeNamejp != null
          ? place.placeNamejp
          : place.placeName}
      </h3>

      {slides && slides.length > 0 ? (
        <CommonCarousel slides={slides} />
      ) : (
        <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
          <div className="flex justify-center my-8">
            <BsImageAlt className="w-16 h-16 text-neutral-300 dark:text-neutral-500" />
          </div>
        </div>
      )}

      <div className="mb-4 px-4 mt-2">
        <PortableText
          value={
            language === "english"
              ? place.content
              : place.contentjp != null
              ? place.contentjp
              : place.content
          }
          components={RichTextComponents}
        />
      </div>
    </>
  );
};

export default PlaceContent;
