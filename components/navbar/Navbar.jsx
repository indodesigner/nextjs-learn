"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarItems from "./NavbarItems";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "../../public/images/techcrush-logo.svg";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

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

  return (
    <div className="py-4 sm:py-6 px-4 md:px-16 bg-white dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-70 dark:bg-opacity-30 border-b-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 min-w-full scroll-auto">
      <div className="flex justify-between">
        <Link
          href="/"
          className="font-medium flex items-center gap-1 link-hover"
        >
          <Image src={Logo} width={80} height={48} alt="logo image"></Image>
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
            className="absolute w-[60vw] h-[100vh] top-0 right-0 bg-black"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <div className="px-4 py-4 flex justify-end">
              <button
                className="text-3xl text-white"
                onClick={() => closeNavbar()}
              >
                <LuX />
              </button>
            </div>

            <NavbarItems
              isToggled={isToggled}
              closeNavbar={closeNavbar}
              disableScroll={disableScroll}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
