import { getBlogs } from "/sanity/sanity-utils";
import Link from "next/link";
import { LuFrown } from "react-icons/lu";
import GetCountry from "@/components/getCountry";
import BlogContent from "./blogsList";

export const metadata = {
  title: "Niko Travels",
  description: "Explore with Niko Travels - Blogs",
};

const TIMEOUT_DURATION = 5000;
export default async function Blogs() {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout: The operation took too long to complete."));
    }, TIMEOUT_DURATION);
  });

  try {
    // Use Promise.race to wait for the getBlogs promise or the timeout promise
    const blogs = await Promise.race([getBlogs(), timeoutPromise]);

    return (
      <>
        {blogs != 0 ? (
          <div className="container mt-0 md:mt-24">
            <BlogContent blogs={blogs} />
            <GetCountry country={null} />
          </div>
        ) : (
          <div className="container flex place-content-center place-items-center min-h-screen">
            <h1>Coming soon...</h1>
          </div>
        )}
      </>
    );
  } catch (error) {
    // Handle the timeout error or any other errors that may occur
    console.error("Error fetching blogs:", error.message);
    return (
      <div className="mt-[20vh] text-center">
        <span className="flex justify-center text-3xl">
          <LuFrown />
        </span>
        <h1 className="text-lg font-bold">Error fetching blogs</h1>
        <h5 className="text-sm">Please try again later</h5>
        <Link href={"/"} className="text-sm link-hover underline">
          Go back
        </Link>
        <GetCountry country={null} />
      </div>
    );
  }
}

export const revalidate = 10;
