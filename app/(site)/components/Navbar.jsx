"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "/public/images/logo.png";
import ThemeChanger from "@/components/themeSwitcher";
import { usePathname } from "next/navigation";
import { useCountry } from "/contexts/countryContext";
import { useLanguage } from "/contexts/languageContext";
import SwitchLanguage from "@/components/switchLanguage";
import SocialLinks from "@/components/socialLinks";

const Navbar = () => {
  const path = usePathname();
  const { country } = useCountry();
  const { language } = useLanguage();

  const [isToggled, setToggle] = useState(false);

  const links = [
    { href: "/india", name: "India", namejp: "インド" },
    { href: "/japan", name: "Japan", namejp: "日本" },
    { href: "/packages", name: "Packages", namejp: "パッケージ" },
    { href: "/places", name: "Destinations", namejp: "目的地" },
    { href: "/blogs", name: "Blogs", namejp: "ブログ" },
    { href: "/about", name: "About", namejp: "について" },
    { href: "/contact", name: "Contact", namejp: "接触" },
  ];

  const closeNavbar = () => {
    setToggle(false);
    enableScroll();
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <div className="hidden lg:block fixed top-0 z-50 min-w-[100%]">
        <header className="flex items-center justify-between py-2 sm:py-4 px-4 md:px-10 lg:px-20 min-w-full scroll-auto">
          <Link
            href="/"
            className="font-medium flex items-center gap-1 link-hover shadow-md rounded-3xl"
          >
            <Image
              src={Logo}
              width={56}
              height={56}
              alt="logo image"
              priority
            ></Image>
          </Link>

          <ul className="ps-[7px] py-2 flex flex-row items-center bg-white dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-100 dark:bg-opacity-30 border-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 rounded-3xl shadow-lg">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${
                    path === link.href || country === link.name.toLowerCase()
                      ? "font-bold py-[2px] px-4 border-[1px] bg-white dark:bg-neutral-900 dark:bg-opacity-70 border-neutral-200 dark:border-neutral-700 rounded-2xl"
                      : "font-medium"
                  }  link-hover "`}
                >
                  <span
                    className={`${
                      path === link.href || country === link.name.toLowerCase()
                        ? "gradient-text"
                        : "px-4"
                    } "hover:underline"`}
                  >
                    {language === "english" ? link.name : link.namejp}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <div className="px-2">
                <SwitchLanguage />
              </div>
            </li>

            <li>
              <div className="ps-3">
                <ThemeChanger />
              </div>
            </li>
          </ul>
        </header>
      </div>

      {/* ------------------------mobile nav------------------------------ */}
      <div className="block lg:hidden sticky top-0 z-50">
        <div className="py-4 sm:py-6 px-4 md:px-16 bg-white dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-70 dark:bg-opacity-30 border-b-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 min-w-full scroll-auto">
          <div className="flex justify-between">
            <Link
              href="/"
              className="font-medium flex items-center gap-1 link-hover"
            >
              <Image
                src={Logo}
                width={32}
                height={32}
                alt="logo image"
                priority
              ></Image>
            </Link>
            <div className="flex align-middle divide-x divide-neutral-400 dark:divide-neutral-500 divide-opacity-30 dark:divide-opacity-30">
              <SwitchLanguage />
              <div className="ps-3 pe-1">
                <ThemeChanger />
              </div>

              <button
                className="text-3xl ps-3"
                onClick={() => {
                  setToggle(!isToggled);
                  disableScroll();
                }}
                aria-label="Open navigation menu"
              >
                <LuMenu />
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isToggled && (
              <motion.div
                className="absolute w-[100vw] h-[100vh] top-0 right-0 bg-black bg-opacity-50 dark:bg-opacity-70"
                initial="hidden"
                animate={isToggled ? "visible" : "hidden"}
                exit="hidden"
                variants={navContainer}
              >
                <div
                  className="absolute w-[40vw] sm:w-[60vw] h-[100vh] top-0 left-0"
                  onClick={() => {
                    closeNavbar();
                  }}
                ></div>
                <div className="absolute w-[60vw] sm:w-[40vw] h-[100vh] top-0 right-0 bg-white dark:bg-neutral-900 bg-opacity-100">
                  <div className="px-4 py-4 flex justify-end">
                    <button
                      className="text-3xl dark:text-white"
                      onClick={() => closeNavbar()}
                      aria-label="Close navigation menu"
                    >
                      <LuX />
                    </button>
                  </div>

                  <motion.ul
                    className="px-8"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={navList}
                  >
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="group"
                        onClick={() => {
                          closeNavbar();
                        }}
                      >
                        <motion.li
                          className="nav-item dark:text-white text-xl sm:text-2xl font-semibold border-b border-neutral-200 dark:border-neutral-800 mb-4 pb-4"
                          variants={navItem}
                        >
                          <h6 className="link-hover">
                            {language === "english" ? link.name : link.namejp}
                          </h6>
                        </motion.li>
                      </Link>
                    ))}
                    {/* <motion.li
                      className="ps-2 flex flex-row gap-4 divide-x-2 divide-neutral-300 dark:divide-neutral-600 items-center nav-item dark:text-white text-lg sm:text-xl mt-8"
                      variants={navItem}
                    >
                      <SwitchLanguage />
                      <div className="ps-3">
                        <ThemeChanger />
                      </div>
                    </motion.li> */}
                    <motion.li
                      className="ps-2 flex flex-row gap-4 divide-x-2 divide-neutral-300 dark:divide-neutral-600 items-center nav-item dark:text-white text-lg sm:text-xl mt-8"
                      variants={navItem}
                    >
                      <SocialLinks />
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
