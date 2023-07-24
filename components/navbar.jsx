import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/next-logo.svg";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-4 md:px-16 sticky top-0 z-50 bg-neutral-600 backdrop-filter backdrop-blur-xl bg-opacity-30 border-b-[1px] border-white border-opacity-10 min-w-full scroll-auto">
      <Link href="/" className="font-medium hover:underline">
        <Image src={Logo} width={100} height={50}></Image>
      </Link>

      <ul className="flex flex-row gap-3">
        <li>
          <Link
            href="/blogs"
            className="font-medium hover:underline hover:decoration-wavy hover:decoration-purple-500 duration-200"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="font-medium hover:underline hover:decoration-wavy hover:decoration-purple-500 duration-200"
          >
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
    </div>
  );
}
