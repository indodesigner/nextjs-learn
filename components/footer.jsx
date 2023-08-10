import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/techcrush-logo-white.svg";
import logoDark from "../public/images/techcrush-logo-dark.svg";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex items-center justify-between py-3 sm:py-4 px-4 md:px-16 bg-neutral-100 dark:bg-neutral-900 backdrop-filter backdrop-blur-xl bg-opacity-30 dark:bg-opacity-30 border-t-[1px] border-neutral-700 dark:border-neutral-500 border-opacity-10 dark:border-opacity-10 min-w-full scroll-auto">
      <Link href="/" className="font-medium text-center">
        <Image
          src={Logo}
          width={64}
          height={64}
          alt="logo image"
          className="hidden dark:block"
        ></Image>
        <Image
          src={logoDark}
          width={64}
          height={64}
          alt="logo image"
          className="dark:hidden"
        ></Image>
        <h6 className="text-xs font-mediun ">TechCrush</h6>
      </Link>
      <div>
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
          <li>
            <Link href="/blogs" className="text-medium md:text-2xl link-hover">
              <AiFillInstagram />
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-medium md:text-2xl link-hover">
              <AiFillFacebook />
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-medium md:text-2xl link-hover">
              <AiFillTwitterCircle />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
