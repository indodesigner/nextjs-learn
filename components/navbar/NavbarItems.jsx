"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeChanger from "../themeSwitcher";

const Navbar = ({ closeNavbar, enableScroll }) => {
  const links = [
    { href: "/countries/india", text: "India" },
    { href: "/countries/japan", text: "Japan" },
    { href: "/blogs", text: "Blogs" },
    { href: "/about", text: "About" },
  ];

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
              className="nav-item text-white text-2xl sm:text-3xl mb-2 ps-2"
              variants={navItem}
              key={link.text}
            >
              <h6 className="link-hover">{link.text}</h6>
            </motion.li>
          </Link>
        ))}

        <motion.li
          className="nav-item text-white text-2xl sm:text-3xl mt-8"
          variants={navItem}
        >
          <ThemeChanger />
        </motion.li>
      </motion.ul>
    </>
  );
};

export default Navbar;
