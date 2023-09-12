"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "/public/images/logo.png";
import ThemeChanger from "./themeSwitcher";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const [isToggled, setToggle] = useState(false);

  const links = [
    { href: "/countries/india", text: "India" },
    { href: "/countries/japan", text: "Japan" },
    { href: "/blogs", text: "Blogs" },
    { href: "/about", text: "About" },
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
        <header className="flex items-center justify-between py-2 sm:py-4 px-4 md:px-16 min-w-full scroll-auto">
          <Link
            href="/"
            className="font-medium flex items-center gap-1 link-hover"
          >
            <Image src={Logo} width={56} height={56} alt="logo image"></Image>
          </Link>

          <ul className="flex flex-row gap-5 bg-white dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-80 dark:bg-opacity-30 border-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 ps-6 py-2 rounded-3xl shadow-sm">
            {links.map((link) => (
              <li className="pr" key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    link.href === path
                      ? "font-medium gradient-text"
                      : "font-normal"
                  }  link-hover"`}
                >
                  {link.text}
                </Link>
              </li>
            ))}

            <li>
              <div>
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
              <Image src={Logo} width={56} height={56} alt="logo image"></Image>
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
                    {links.map((link) => (
                      <Link
                        href={link.href}
                        className="group"
                        onClick={() => {
                          closeNavbar();
                        }}
                      >
                        <motion.li
                          className="nav-item dark:text-white text-2xl sm:text-3xl mb-2 ps-2"
                          variants={navItem}
                          key={link.text}
                        >
                          <h6 className="link-hover">{link.text}</h6>
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
