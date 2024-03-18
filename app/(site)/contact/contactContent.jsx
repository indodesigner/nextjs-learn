"use client";
import React from "react";
// import Image from "next/image";
import ContactForm from "@/components/contactForm";
import { FaPhone, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
// import Illustration from "/public/images/contact-illustration.svg";
import { useLanguage } from "/contexts/languageContext";

const ContactContent = ({
  indianPackDetails,
  japanesePackDetails,
  gCaptchaSiteKey,
}) => {
  const { language } = useLanguage();

  return (
    <>
      <div className="container mt-0 sm:mt-8 lg:mt-16">
        <h2 className="text-3xl font-extrabold">
          {language === "english" ? "Contact us" : "お問い合わせ"}
        </h2>
        <p className="text-sm font-normal mb-4">
          Send your details we will get back to you within 24 Hrs
        </p>
        <div className="grid grid-cols-1 gap-2 mb-4 sm:mb-8">
          <div className=" bg-neutral-50 dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80 dark:border-[1px] dark:border-neutral-400 dark:border-opacity-20 p-4 rounded-xl shadow-xl">
            <ContactForm
              indianPackDetails={indianPackDetails}
              japanesePackDetails={japanesePackDetails}
              gCaptchaSiteKey={gCaptchaSiteKey}
              language={language}
              currentPack={null}
            />
          </div>
        </div>
        <div className="grid grid-col-1 grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="card lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-x divide-neutral-400 divide-opacity-30 sm:divide-y-0 p-2">
            <div className="flex justify-center align-middle hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md p-2">
              <a
                href="tel:+914842867618"
                className="flex items-center text-lg font-semibold gap-1"
              >
                <FaPhone />
                {/* +91 7902867672 */}
                +91 4842867618
              </a>
            </div>
            <div className="flex justify-center align-middle hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md p-2">
              <a
                href="tel:+919895058745"
                className="flex items-center text-lg font-semibold gap-1"
              >
                <FaPhone />
                +91 9895058745
              </a>
            </div>

            <div className="flex justify-center align-middle hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md p-2">
              <a
                href="https://wa.me/919207806444"
                target="_blank"
                className="flex items-center text-lg font-semibold gap-1"
              >
                <FaWhatsapp />
                +91 9207806444
              </a>
            </div>
          </div>
          <div className="card flex justify-center lg:items-center gap-1 p-2">
            <div>
              <FaLocationDot className=" text-2xl lg:text-sm pt-2 lg:py-0" />
            </div>
            <p>
              Niko Travels Pvt Ltd (Evergreen Travels), Hikari Bldg. - Niko
              Hotels 4th Floor, K.P. Vallon Road, Cochin-20 Kerala, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
