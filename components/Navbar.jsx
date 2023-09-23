"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "/public/images/logo.png";
import ThemeChanger from "/components/themeSwitcher";
import { usePathname } from "next/navigation";
import { useCountry } from "/contexts/countryContext";

const Navbar = () => {
  const path = usePathname();
  const { country } = useCountry();

  const [isToggled, setToggle] = useState(false);

  const countryLinks = [
    { href: "/countries/india", name: "India" },
    { href: "/countries/japan", name: "Japan" },
  ];

  const links = [
    // { href: "/countries/india", name: "India" },
    // { href: "/countries/japan", name: "Japan" },
    { href: "/packages", name: "Packages" },
    { href: "/places", name: "Destinations" },
    { href: "/blogs", name: "Blogs" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
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
      <div className="hidden md:block fixed top-0 z-50 min-w-[100%]">
        <header className="flex items-center justify-between py-2 sm:py-4 px-4 md:px-10 lg:px-20 min-w-full scroll-auto">
          <Link
            href="/"
            className="font-medium flex items-center gap-1 link-hover shadow-md rounded-3xl"
          >
            <Image src={Logo} width={56} height={56} alt="logo image"></Image>
          </Link>

          <ul className="flex flex-row bg-white dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-100 dark:bg-opacity-30 border-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 ps-[5px] py-[6px] rounded-xl shadow-md">
            <li>
              {countryLinks &&
                countryLinks.map((link) => (
                  <a
                    href={link.href}
                    className={`${
                      path === link.href || country === link.name.toLowerCase()
                        ? "font-medium py-[2px] px-4 border-[1px] bg-white dark:bg-neutral-900 dark:bg-opacity-70 border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm"
                        : "font-normal"
                    }  link-hover"`}
                  >
                    <span
                      className={`${
                        path === link.href ||
                        country === link.name.toLowerCase()
                          ? "gradient-text"
                          : "px-4"
                      } "hover:underline"`}
                    >
                      {link.name}
                    </span>
                  </a>
                ))}
            </li>

            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    path === link.href
                      ? "font-medium py-[2px] px-4 border-[1px] bg-white dark:bg-neutral-900 dark:bg-opacity-70 border-neutral-200 dark:border-neutral-700 rounded-lg"
                      : "font-normal"
                  }  link-hover"`}
                >
                  <span
                    className={`${
                      path === link.href ? "gradient-text" : "px-4"
                    } "hover:underline"`}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}

            <li>
              <div className="ps-3">
                <ThemeChanger />
              </div>
            </li>
          </ul>
        </header>
      </div>

      {/* ------------------------------------------------------ */}
      <div className="block md:hidden sticky top-0 z-50">
        <div className="py-4 sm:py-6 px-4 md:px-16 bg-white dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-70 dark:bg-opacity-30 border-b-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 min-w-full scroll-auto">
          <div className="flex justify-between">
            <Link
              href="/"
              className="font-medium flex items-center gap-1 link-hover"
            >
              <Image src={Logo} width={32} height={32} alt="logo image"></Image>
            </Link>
            <button
              className="text-3xl"
              onClick={() => {
                setToggle(!isToggled);
                disableScroll();
              }}
            >
              <LuMenu />
            </button>
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
                  className="absolute w-[40vw] h-[100vh] top-0 left-0"
                  onClick={() => {
                    closeNavbar();
                  }}
                ></div>
                <div className="absolute w-[60vw] h-[100vh] top-0 right-0 bg-white dark:bg-neutral-950 bg-opacity-100">
                  <div className="px-4 py-4 flex justify-end">
                    <button
                      className="text-3xl dark:text-white"
                      onClick={() => closeNavbar()}
                    >
                      <LuX />
                    </button>
                  </div>

                  <motion.ul
                    className="ps-8"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={navList}
                  >
                    {countryLinks &&
                      countryLinks.map((link) => (
                        <a
                          href={link.href}
                          className="group"
                          onClick={() => {
                            closeNavbar();
                          }}
                          key={link.name}
                        >
                          <motion.li
                            className="nav-item dark:text-white text-2xl font-semibold sm:text-3xl mb-4 ps-2"
                            variants={navItem}
                          >
                            <h6 className="link-hover">{link.name}</h6>
                          </motion.li>
                        </a>
                      ))}
                    {links.map((link) => (
                      <Link
                        href={link.href}
                        className="group"
                        onClick={() => {
                          closeNavbar();
                        }}
                        key={link.name}
                      >
                        <motion.li
                          className="nav-item dark:text-white text-2xl font-semibold sm:text-3xl mb-4 ps-2"
                          variants={navItem}
                        >
                          <h6 className="link-hover">{link.name}</h6>
                        </motion.li>
                      </Link>
                    ))}

                    <motion.li
                      className="nav-item dark:text-white text-2xl sm:text-3xl mt-8"
                      variants={navItem}
                    >
                      <ThemeChanger />
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
