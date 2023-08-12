"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/techcrush-logo.svg";
import ThemeChanger from "./themeSwitcher";
import { usePathname } from "next/navigation";
const links = [
  { href: "/countries/india", text: "India" },
  { href: "/countries/japan", text: "Japan" },
  { href: "/blogs", text: "Blogs" },
  { href: "/about", text: "About" },
];

export default function Header() {
  const path = usePathname();
  return (
    // <div className="flex items-center justify-between py-4 sm:py-6 px-4 md:px-16 bg-white dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-70 dark:bg-opacity-30 border-b-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 min-w-full scroll-auto">
    <div className="flex items-center justify-between py-2 sm:py-4 px-4 md:px-16 min-w-full scroll-auto">
      <Link href="/" className="font-medium flex items-center gap-1 link-hover">
        <Image src={Logo} width={80} height={48} alt="logo image"></Image>
      </Link>

      <ul className="flex flex-row gap-5 bg-white dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-80 dark:bg-opacity-30 border-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 ps-6 py-2 rounded-3xl shadow-sm">
        {links.map((link) => (
          <li className="pr" key={link.href}>
            <Link
              href={link.href}
              className={`${
                link.href === path ? "font-medium gradient-text" : "font-normal"
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
    </div>
  );
}
