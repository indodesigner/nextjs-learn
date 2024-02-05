import Link from "next/link";

import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <>
      <div>
        <ul className="flex flex-row gap-5">
          <li className="hover:scale-90 transition">
            <Link href="/about" className="text-medium md:text-2xl">
              <FaSquareInstagram />
            </Link>
          </li>
          <li className="hover:scale-90 transition">
            <Link
              href="https://www.facebook.com/nikotravelskochi/"
              className="text-medium md:text-2xl"
            >
              <FaSquareFacebook />
            </Link>
          </li>
          <li className="hover:scale-90 transition">
            <Link href="/about" className="text-medium md:text-2xl">
              <FaXTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
