"use client";
import React from "react";
import { RichTextComponents } from "/utils/RichTextComponents";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";
import CommonCarousel from "@/components/commonCarousel";
import { useLanguage } from "/contexts/languageContext";
import RelatedPackages from "@/components/relatedPackages";

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

      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md my-3 p-2">
        <div className="px-2 flex flex-wrap gap-2">
          {place.placeTypes &&
            place.placeTypes.map((item, index) => (
              <Link
                href={`/places/${item.slug}`}
                key={index}
                className="group border-2 border-red-500 dark:border-neutral-200 hover:bg-red-100 dark:hover:bg-neutral-700 p-1 px-5 rounded-3xl transition"
              >
                <h6 className="text-xs font-medium dark:text-white">
                  {language === "english"
                    ? item.placeTypeName.toUpperCase()
                    : item.placeTypeNamejp || item.placeTypeName.toUpperCase()}
                </h6>
              </Link>
            ))}
        </div>
      </div>

      <div className="mb-4 px-3 sm:px-0 mt-2">
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

      <RelatedPackages place={place.placeName} language={language} />
    </>
  );
};

export default PlaceContent;
