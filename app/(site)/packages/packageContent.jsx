"use client";
import React, { useState, useEffect } from "react";
import { RichTextComponents } from "/utils/RichTextComponents";
import Link from "next/link";
// import Image from "next/image";
// import { format } from "date-fns";
// import { parseISO } from "date-fns";
import { PortableText } from "@portabletext/react";
// import urlFor from "/utils/urlFor";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import CommonCarousel from "@/components/commonCarousel";
import DialogContactForm from "@/components/dialogContactForm";
import { useLanguage } from "/contexts/languageContext";
import BackButton from "@/components/backButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RelatedPlaces from "@/components/relatedPlaces";

const packageContent = ({
  tourPackage,
  slides,
  country,
  indianPackDetails,
  japanesePackDetails,
}) => {
  const { language } = useLanguage();

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 500; // You can adjust this threshold as needed

      // Toggle the visibility of the button based on the scroll position
      setIsButtonVisible(scrollY > threshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <Link href="/packages" className="gradient-text">
            {language === "english" ? "Packages" : "パッケージ"}
          </Link>
          <h6 className="text-sm">
            <BsChevronRight className="pt-[2px]" />
          </h6>
          <Link
            href={`/${country}`}
            className=" text-neutral-500 dark:text-neutral-400"
          >
            {language === "english"
              ? tourPackage.country
              : tourPackage.countryjp}
          </Link>
        </div>
        <BackButton language={language} />
      </div>

      <CommonCarousel slides={slides} />

      <div className="bg-neutral-100 dark:bg-neutral-700 bg-opacity-30 dark:bg-opacity-30 dark:border-[1px] dark:border-neutral-400 dark:border-opacity-20 shadow-lg rounded-2xl my-3 p-2">
        <div className="grid grid-cols-4 md:grid-cols-4 mb-2 px-1">
          <div className="col-span-2 md:col-span-3">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-2">
              {language === "english"
                ? tourPackage.packageName
                : tourPackage.packageNamejp || tourPackage.packageName}
            </h3>
          </div>
          <div
            className={`${
              isButtonVisible
                ? "fixed bottom-12 sm:bottom-16 right-16"
                : "block"
            } col-span-2 md:col-span-1 place-self-end self-center z-10`}
          >
            <DialogContactForm
              indianPackDetails={indianPackDetails}
              japanesePackDetails={japanesePackDetails}
              tourPackage={tourPackage}
              language={language}
            />
          </div>
        </div>

        <div className="flex flex-row gap-2 sm:gap-0 justify-between px-2 mb-3">
          {tourPackage.duration != null ? (
            <div className="flex flex-row place-items-center">
              <LuCalendarClock className="text-md sm:text-lg" />

              <h6 className="text-md sm:text-lg ps-2">
                <strong>{tourPackage.duration.days}</strong>{" "}
                {language === "english" ? "Days & " : "日々 & "}
                <strong>{tourPackage.duration.nights}</strong>{" "}
                {language === "english" ? "Nights" : "夜"}
              </h6>
            </div>
          ) : null}

          {/* {tourPackage.rate && (
            <div className="hidden sm:block border-r border-neutral-300 dark:border-neutral-600"></div>
          )} */}

          {tourPackage.rate != null ? (
            <h6 className="text-sm sm:text-md flex flex-col sm:flex-row items-center gap-0 sm:gap-2 ">
              {language === "english" ? "Starting from" : "から始まる"}
              <strong className="text-lg sm:text-lg">
                ₹{tourPackage.rate}
              </strong>
            </h6>
          ) : null}
        </div>

        <hr className=" border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70" />

        <div className="flex items-center px-1">
          <h4 className="text-xs">
            {language === "english" ? "DESTINATIONS" : "目的地"}
          </h4>
          <h6 className="text-sm">
            <BsChevronRight className="pb-[2px]" />
          </h6>
          <div className="p-2 flex flex-wrap gap-2 divide-x divide-neutral-200 dark:divide-neutral-600">
            {tourPackage.place &&
              tourPackage.place.map((item, index) => (
                // <Link
                //   href={`/places/${item.slug}`}
                //   key={index}
                //   className="group border-2 border-neutral-800 dark:border-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 p-1 px-5 rounded-3xl transition"
                // >
                <h6
                  className="text-xs font-medium text-red-500 dark:text-white ps-2"
                  key={index}
                >
                  {language === "english"
                    ? item.placeName.toUpperCase()
                    : item.placeNamejp || item.placeName.toUpperCase()}
                </h6>
                // </Link>
              ))}
          </div>
        </div>
        <hr className=" border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70" />

        <div className="flex items-center px-1">
          <h4 className="text-xs ">
            {language === "english" ? "ATTRACTIONS" : "魅力"}
          </h4>
          <h6 className="text-sm">
            <BsChevronRight className="pb-[2px]" />
          </h6>
          <div className="p-2 flex flex-wrap gap-2 divide-x divide-neutral-200 dark:divide-neutral-600">
            {tourPackage.placeTypes &&
              tourPackage.placeTypes.map((item, index) => (
                // <Link
                //   href={`/placeTypes/${item.slug}`}
                //   key={index}
                //   className="group border-2 border-red-500 dark:border-red-500 hover:bg-red-100 dark:hover:bg-neutral-700 p-1 px-5 rounded-3xl transition"
                // >
                <h6
                  className="text-xs font-medium text-red-500 dark:text-white ps-2"
                  key={index}
                >
                  {language === "english"
                    ? item.placeTypeName.toUpperCase()
                    : item.placeTypeNamejp || item.placeTypeName.toUpperCase()}
                </h6>
                // </Link>
              ))}
          </div>
        </div>
      </div>

      {/* <div className="my-5 px-4 py-5 bg-white dark:bg-neutral-900 shadow-lg shadow-neutral-200 dark:shadow-neutral-900 rounded-md">
        <div className="flex flex-row justify-between">
          {duration == 0 ? (
            <h6>Duration depends on your schedule</h6>
          ) : (
            <h4 className="font-bold text-lg mb-4">{duration} Days</h4>
          )}

          {tourPackage.rate ? (
            <h4 className="font-bold text-lg mb-4">₹{tourPackage.rate}</h4>
          ) : (
            <h6>Package rate depends on the schedule</h6>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
          <div className="flex flex-row place-items-center">
            <h5 className="min-w-[80px] sm:min-w-fit font-light">Departure</h5>
            <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 ms-2 rounded-lg font-medium">
              {tourPackage.departureDate ? (
                format(parseISO(tourPackage.departureDate), "dd MMMM yyyy")
              ) : (
                <h6>You Pick</h6>
              )}
            </span>
          </div>
          <div className="flex flex-row place-items-center">
            <h5 className="min-w-[80px] sm:min-w-fit font-light">Return</h5>
            <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 ms-2 rounded-lg font-medium">
              {tourPackage.returnDate ? (
                format(parseISO(tourPackage.returnDate), "dd MMMM yyyy")
              ) : (
                <h6>You Pick</h6>
              )}
            </span>
          </div>
        </div>
      </div> */}
      <div className="gradient-bg-light mb-8 rounded-xl px-2 sm:px-4 pb-4 pt-1">
        <PortableText
          value={
            language === "english"
              ? tourPackage.summary
              : tourPackage.summaryjp || tourPackage.summary
          }
          components={RichTextComponents}
        />
      </div>
      {/* <hr className=" border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70" /> */}
      <section className="px-2 sm:px-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {language === "english"
                ? "Detailed Schedule"
                : "詳細スケジュール"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8">
                <PortableText
                  value={
                    language === "english"
                      ? tourPackage.content
                      : tourPackage.contentjp || tourPackage.content
                  }
                  components={RichTextComponents}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {language === "english" ? "Tour Perks" : "ツアー特典"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8">
                <PortableText
                  value={
                    language === "english"
                      ? tourPackage.inclusions
                      : tourPackage.inclusionsjp || tourPackage.inclusions
                  }
                  components={RichTextComponents}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      {/* <hr className="border-neutral-300 dark:border-neutral-800 mt-16 mb-4" /> */}

      <section className="px-2 sm:px-4">
        <h4 className="text-lg sm:text-xl font-bold mt-8 mb-4">
          {language === "english" ? "Featured Destinations" : "注目の目的地"}
        </h4>
        <RelatedPlaces relatedPlaces={tourPackage.place} language={language} />
      </section>
    </>
  );
};

export default packageContent;
