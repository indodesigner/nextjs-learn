import Link from "next/link";
// import Image from "next/image";
// import Logo from "../public/images/logo.png";
// import logoDark from "../public/images/logo.png";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex items-center justify-between py-3 sm:py-4 px-4 md:px-16 bg-neutral-100 dark:bg-neutral-900 backdrop-filter backdrop-blur-xl bg-opacity-30 dark:bg-opacity-30 border-t-[1px] border-neutral-700 dark:border-neutral-500 border-opacity-10 dark:border-opacity-10 min-w-full scroll-auto">
      <h6 className="text-[10px] sm:text-xs">Copyright © 2023 Niko Travels</h6>
      <div className="hidden sm:block">
        <ul className="flex flex-row gap-3">
          <li>
            <Link
              href="/blogs"
              className="text-xs md:text-sm font-medium link-hover"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-xs md:text-sm font-medium link-hover"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="">
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
