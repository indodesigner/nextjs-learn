import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/techcrush-logo.svg";
import ThemeChanger from "../components/themeSwitcher";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-4 md:px-16 sticky top-0 z-50 bg-neutral-100 dark:bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-30 dark:bg-opacity-30 border-b-[1px] border-neutral-700 dark:border-white border-opacity-10 dark:border-opacity-10 min-w-full scroll-auto">
      <Link href="/" className="font-medium flex items-center gap-1 link-hover">
        <Image src={Logo} width={80} height={48} alt="logo image"></Image>
        {/* <h6 className="text-sm font-bold ">TechCrush</h6> */}
      </Link>

      <ul className="flex flex-row gap-3">
        <li>
          <Link href="/blogs" className="font-medium link-hover">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-medium link-hover">
            About
          </Link>
        </li>
        {/* <li>
            <Link href="/code/repos" className="font-medium hover:underline">
              Code
            </Link>
          </li> */}
        {/* <li>
            <Link href="/test" className="font-medium hover:underline">
              Test
            </Link>
          </li>
          <li>
            <Link href="/form" className="font-medium hover:underline">
              Form
            </Link>
          </li>
          <li>
            <Link href="/learn" className="font-medium hover:underline">
              Learn
            </Link>
          </li> */}
      </ul>
      <div>
        <ThemeChanger />
      </div>
    </div>
  );
}
