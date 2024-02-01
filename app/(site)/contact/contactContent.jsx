"use client";
import React from "react";
import Image from "next/image";
import ContactForm from "@/components/contactForm";
import { FaPhone, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import Illustration from "/public/images/contact-illustration.svg";
import { useLanguage } from "/contexts/languageContext";

const ContactContent = ({ indianPackDetails, japanesePackDetails }) => {
  const { language } = useLanguage();

  return (
    <>
      <div className="container mt-0 sm:mt-8 lg:mt-16">
        <h2 className="text-3xl font-extrabold my-4">
          {language === "english" ? "Contact us" : "お問い合わせ"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="p-2 relative">
              <Image
                src={Illustration}
                width={400}
                height={400}
                alt="Contact us illustration"
                className="w-auto h-auto"
              ></Image>
              <div className="bg-neutral-100 dark:bg-neutral-800 bg-opacity-80 dark:bg-opacity-80 dark:border-[1px] dark:border-neutral-400 dark:border-opacity-20 px-2 py-1 rounded-lg shadow-lg absolute top-0 right-0 xs:right-[50px] sm:right-[100px] md:right-0 lg:right-[50px]">
                <a
                  href="tel:+914842867618"
                  className="flex items-center text-xl font-semibold gap-1 mb-1 p-1 px-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md"
                >
                  <FaPhone />
                  {/* +91 7902867672 */}
                  +91 4842867618
                </a>
                <hr className="border-neutral-200 dark:border-neutral-700" />
                <a
                  href="tel:+919895058745"
                  className="flex items-center text-xl font-semibold gap-1 my-1 p-1 px-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md"
                >
                  <FaPhone />
                  +91 9895058745
                </a>
                <hr className="border-neutral-200 dark:border-neutral-700" />
                <a
                  href="https://wa.me/919207806444"
                  target="_blank"
                  className="flex items-center text-xl font-semibold gap-1 mt-1 p-1 px-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md"
                >
                  <FaWhatsapp />
                  +91 9207806444
                </a>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[380px]">
            <div className=" bg-neutral-50 dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80 dark:border-[1px] dark:border-neutral-400 dark:border-opacity-20 p-4 rounded-xl shadow-xl">
              <p className="text-sm font-normal mb-2 text-center">
                Send your details we will get back to you within 24 Hrs
              </p>
              <ContactForm
                indianPackDetails={indianPackDetails}
                japanesePackDetails={japanesePackDetails}
                language={language}
                currentPack={null}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 bg-neutral-900 dark:bg-neutral-800 flex justify-center lg:items-center gap-1 py-2">
        <div>
          <FaLocationDot className="text-white text-2xl lg:text-sm pt-2 lg:py-0" />
        </div>
        <p className="text-white">
          Niko Travels Pvt Ltd (Evergreen Travels), Hikari Bldg. - Niko Hotels
          4th Floor, K.P. Vallon Road, Cochin-20 Kerala, India
        </p>
      </div>
    </>
  );
};

export default ContactContent;
