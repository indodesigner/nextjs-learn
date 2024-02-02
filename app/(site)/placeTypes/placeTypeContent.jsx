"use client";
import React from "react";
import { RichTextComponents } from "/utils/RichTextComponents";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";
import CommonCarousel from "@/components/commonCarousel";
import { useLanguage } from "/contexts/languageContext";
import RelatedPackages from "@/components/relatedPackages";
import RelatedPlaces from "@/components/relatedPlaces";
import BackButton from "@/components/backButton";

const PlaceTypeContent = ({
  placeType,
  slides,
  relatedPacks,
  relatedPlaces,
}) => {
  const { language } = useLanguage();

  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <Link href="/places" className="gradient-text">
            {language === "english" ? "Destinations types" : "目的地"}
          </Link>
        </div>
        <BackButton language={language} />
      </div>

      {slides && slides.length > 0 ? (
        <CommonCarousel slides={slides} />
      ) : (
        <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
          <div className="flex justify-center my-8">
            <BsImageAlt className="w-16 h-16 text-neutral-300 dark:text-neutral-500" />
          </div>
        </div>
      )}
      <h3 className="px-3 sm:px-0 text-2xl md:text-3xl font-bold my-2 mt-4">
        {language === "english"
          ? placeType.placeTypeName
          : placeType.placeTypeNamejp || placeType.placeTypeName}
      </h3>

      <div className="mb-4 px-3 sm:px-0 mt-2">
        <PortableText
          value={
            language === "english"
              ? placeType.content
              : placeType.contentjp || placeType.content
          }
          components={RichTextComponents}
        />
      </div>
      <hr className="border-neutral-300 dark:border-neutral-800 mt-8" />
      <h4 className="text-lg sm:text-xl font-bold my-4 text-red-500">
        Curated
        <span className="text-neutral-900 dark:text-neutral-50 ms-2 font-light">
          {language == "english" ? "Destinations" : "目的地"}
        </span>
      </h4>
      {relatedPlaces != 0 ? (
        <RelatedPlaces
          relatedPlaces={relatedPlaces}
          heading={placeType.placeTypeName}
          headingjp={placeType.placeTypeNamejp}
          language={language}
        />
      ) : (
        <h5 className="mt-2">Packages Coming soon...</h5>
      )}

      <hr className="border-neutral-300 dark:border-neutral-800 mt-8" />
      {relatedPacks != 0 ? (
        <RelatedPackages
          relatedPacks={relatedPacks}
          heading={placeType.placeTypeName}
          headingjp={placeType.placeTypeNamejp}
          language={language}
        />
      ) : (
        <h5 className="mt-2">Packages Coming soon...</h5>
      )}
    </>
  );
};

export default PlaceTypeContent;
