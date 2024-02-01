"use client";
import Link from "next/link";
// import Image from "next/image";
// import Logo from "../public/images/logo.png";
// import logoDark from "../public/images/logo.png";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { useLanguage } from "/contexts/languageContext";

export default function Footer() {
  const { language } = useLanguage();

  const links = [
    { href: "/india", name: "India", namejp: "インド" },
    { href: "/japan", name: "Japan", namejp: "日本" },
    { href: "/packages", name: "Packages", namejp: "パッケージ" },
    { href: "/places", name: "Destinations", namejp: "目的地" },
    { href: "/blogs", name: "Blogs", namejp: "ブログ" },
    { href: "/about", name: "About", namejp: "について" },
    { href: "/contact", name: "Contact", namejp: "接触" },
  ];
  return (
    <div className="flex items-center justify-between py-3 sm:py-4 px-4 md:px-16 bg-neutral-100 dark:bg-neutral-700 bg-opacity-30 dark:bg-opacity-30 border-t-[1px] border-neutral-300 dark:border-neutral-400 border-opacity-20 dark:border-opacity-20 backdrop-blur-lg min-w-full scroll-auto">
      <h6 className="text-[10px] sm:text-xs">Copyright © 2024 Niko Travels</h6>
      <div className="hidden sm:block">
        <ul className="flex flex-row gap-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={`${link.href}`}
                className="text-xs md:text-sm link-hover"
              >
                {language === "english" ? link.name : link.namejp}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex flex-row gap-5">
          {/* <li className="hover:scale-90 transition">
            <Link href="/about" className="text-medium md:text-2xl">
              <FaSquareInstagram />
            </Link>
          </li> */}
          <li className="hover:scale-90 transition">
            <Link
              href="https://www.facebook.com/nikotravelskochi/"
              className="text-medium md:text-2xl"
            >
              <FaSquareFacebook />
            </Link>
          </li>
          {/* <li className="hover:scale-90 transition">
            <Link href="/about" className="text-medium md:text-2xl">
              <FaXTwitter />
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
