import { getBlogs } from "/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import urlFor from "@/components/urlFor";
import { LuFrown, LuImageOff } from "react-icons/lu";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import calculateDateTime from "/utils/calculateDateTime";
import GetCountry from "@/components/getCountry";

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

    // const blogs = await getBlogs(); //fetch blogs from sanity query can be fount in (sanity/sanity-utils.js)
    return (
      <div className="container mt-0 md:mt-24">
        <h1 className="text-4xl font-bold my-4">Blogs</h1>

        <ul className="divide-y divide-neutral-500 divide-opacity-20">
          {blogs &&
            blogs.map((blog) => (
              // display blog items as list
              <li className="group p-1" key={blog._id}>
                <Link href={`blogs/${blog.slug}`}>
                  <div className="flex hover:bg-neutral-200 hover:dark:bg-neutral-600 hover:bg-opacity-30 hover:dark:bg-opacity-30 transition p-1 rounded-md">
                    <div className="basis-2/5 sm:basis-1/5">
                      {blog.postImage ? (
                        <Image
                          src={urlFor(blog.postImage)
                            .width(500)
                            .height(300)
                            .url()}
                          width={500}
                          height={500}
                          className="object-cover h-24 rounded-md group-hover:drop-shadow-sm"
                          alt={blog.alt}
                        ></Image>
                      ) : (
                        // else part for no blog image
                        <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                          <div>
                            <LuImageOff className="w-16 h-24 text-neutral-300 dark:text-neutral-500" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="px-2 basis-3/5 sm:basis-4/5">
                      <div className="flex justify-between">
                        <h1 className="text-sm sm:text-md md:text-lg font-bold mb-2 line-clamp-2 group-hover:gradient-text">
                          {blog.title}
                        </h1>
                        <h6 className="text-[10px] font-bold min-w-[80px] pt-1 text-right">
                          {calculateDateTime(blog.releaseDate)}
                        </h6>
                      </div>
                      {/* rich text component with line clamped to 2 lines */}
                      <div className="line-clamp-2 text-xs mb-2">
                        <PortableText
                          value={blog.content}
                          components={RichTextComponents}
                        />
                      </div>

                      {/* grid to display blog categries inside blogs list */}
                      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">
                        {blog.categories &&
                          blog.categories.map((categ, index) => (
                            <span key={index} className="min-w-max">
                              <h6 className="text-xs font-bold">#{categ}</h6>
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        <GetCountry country={null} />
      </div>
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
