"use client";
import React, { useState, useEffect } from "react";
import { RichTextComponents } from "/utils/RichTextComponents";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
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
import FadeUp from "@/components/animations/fadeUp";

const packageContent = ({
  tourPackage,
  slides,
  country,
  // indianPackDetails,
  // japanesePackDetails,
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
      <FadeUp>
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
      </FadeUp>

      <FadeUp delay="0.2">
        <CommonCarousel slides={slides} />
      </FadeUp>

      <div
        className={`${
          isButtonVisible ? "fixed bottom-12 sm:bottom-16 right-16" : "hidden"
        } col-span-2 md:col-span-1 place-self-end self-center z-10`}
      >
        <DialogContactForm
          // indianPackDetails={indianPackDetails}
          // japanesePackDetails={japanesePackDetails}
          tourPackage={tourPackage}
          language={language}
        />
      </div>

      <FadeUp delay="0.3">
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
                isButtonVisible ? "hidden" : "block"
              } col-span-2 md:col-span-1 place-self-end self-center z-10`}
            >
              <DialogContactForm
                // indianPackDetails={indianPackDetails}
                // japanesePackDetails={japanesePackDetails}
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

            {tourPackage.rate != null ? (
              <h6 className="text-sm sm:text-md flex flex-col sm:flex-row items-center gap-0 sm:gap-2 ">
                {language === "english" ? "Starting from" : "から始まる"}
                <strong className="text-lg sm:text-lg">
                  ₹{tourPackage.rate}
                </strong>
              </h6>
            ) : null}
          </div>

          <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70" />

          <div className=" px-1 py-1 pt-2">
            <div className="flex items-center mb-1">
              <h4 className="text-xs">
                {language === "english" ? "DESTINATIONS" : "目的地"}
              </h4>
              <h6 className="text-sm">
                <BsChevronRight className="pb-[2px]" />
              </h6>
            </div>

            <div className="flex flex-wrap gap-1 mb-1">
              {tourPackage.place &&
                tourPackage.place.map((item) => (
                  <span
                    className="bg-neutral-900 dark:bg-neutral-300 px-2 py-[2px] rounded-2xl sm:max-w-[180px]"
                    key={item._id}
                  >
                    <h6 className="text-xs text-white dark:text-neutral-900 line-clamp-1">
                      {language === "english"
                        ? item.placeName.toUpperCase()
                        : item.placeNamejp || item.placeName.toUpperCase()}
                    </h6>
                  </span>
                ))}
            </div>
          </div>
          <hr className=" border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70" />

          <div className="px-1 pt-2">
            <div className="flex items-center mb-1">
              <h4 className="text-xs">
                {language === "english" ? "ATTRACTIONS" : "魅力"}
              </h4>
              <h6 className="text-sm">
                <BsChevronRight className="pb-[2px]" />
              </h6>
            </div>

            <div className="flex flex-wrap gap-1 mb-2">
              {tourPackage.placeTypes &&
                tourPackage.placeTypes.map((item) => (
                  <span
                    className="border border-neutral-400 dark:border-neutral-400 px-2 rounded-2xl"
                    key={item._id}
                  >
                    <h6 className="text-xs">
                      {language === "english"
                        ? item.placeTypeName.toUpperCase()
                        : item.placeTypeNamejp ||
                          item.placeTypeName.toUpperCase()}
                    </h6>
                  </span>
                ))}
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay="0.2">
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
      </FadeUp>

      <FadeUp delay="0.2">
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
      </FadeUp>

      <FadeUp delay="0.2">
        <section className="px-2 sm:px-4">
          <h4 className="text-lg sm:text-xl font-bold mt-8 mb-4">
            {language === "english" ? "Featured Destinations" : "注目の目的地"}
          </h4>
          <RelatedPlaces
            relatedPlaces={tourPackage.place}
            language={language}
          />
        </section>
      </FadeUp>
    </>
  );
};

export default packageContent;
