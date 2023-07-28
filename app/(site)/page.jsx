import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "../../sanity/sanity-utils";
import urlFor from "../../components/urlFor";
import { BsImageAlt } from "react-icons/bs";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";
import calculateDateTime from "./utils/calculateDateTime";

export default async function HomePage() {
  const blogs = await getBlogs(); //fetch blogs from sanity query can be fount in (sanity/sanity-utils.js)

  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-2">Welcome to TechCrush</h1> */}
      {/* <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa autem hic
        sapiente ad! Repellat nihil odit veniam quaerat veritatis cupiditate
        harum? Eligendi quas, animi sapiente impedit facilis eius magni sit.
      </p> */}

      <div className="flex justify-between mt-8 mb-2">
        <h2 className="text-2xl font-bold">Latest News</h2>
        <Link
          href="/blogs"
          className="group font-medium link-hover flex items-center"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {blogs &&
          blogs.slice(0, 5).map((blog, index) =>
            index === 0 ? (
              <div className="grid row-span-1 col-span-1 md:row-span-2 md:col-span-2">
                <Link
                  id={blog._id}
                  href={`/blogs/${blog.slug}`}
                  className="group card card-hover p-2"
                >
                  {blog.postImage ? (
                    <Image
                      src={urlFor(blog.postImage).url()}
                      width={800}
                      height={500}
                      alt={`${blog.slug}-image`}
                      className="object-cover h-32 md:h-64 rounded-md"
                    ></Image>
                  ) : (
                    // else part for no blog image
                    <div className="grid place-items-center border border-neutral-700 bg-neutral-800 rounded-md">
                      <div>
                        <BsImageAlt className="w-16 h-32 md:h-64 text-neutral-500" />
                      </div>
                    </div>
                  )}

                  <h6 className="text-sm sm:text-md md:text-2xl lg:text-3xl font-bold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
                    {blog.title}
                  </h6>

                  {/* rich text component with line clamped to 2 lines */}
                  <div className="text-sm line-clamp-2 md:line-clamp-5">
                    <PortableText
                      value={blog.content}
                      components={RichTextComponents}
                    />
                  </div>
                  <h6 className="text-[10px] font-bold flex gap-1 mt-2 text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition">
                    {calculateDateTime(blog.releaseDate)}
                  </h6>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1">
                <Link
                  id={blog._id}
                  href={`blogs/${blog.slug}`}
                  className="group card card-hover p-2"
                >
                  {blog.postImage ? (
                    <Image
                      src={urlFor(blog.postImage).url()}
                      width={800}
                      height={500}
                      alt={`${blog.slug}-image`}
                      className="object-cover h-32 rounded-md"
                    ></Image>
                  ) : (
                    // else part for no blog image
                    <div className="grid place-items-center border border-neutral-700 bg-neutral-800 rounded-md">
                      <div>
                        <BsImageAlt className="w-16 h-32 text-neutral-500" />
                      </div>
                    </div>
                  )}

                  <h6 className="text-sm sm:text-md md:text-lg font-bold mt-2 mb-1 line-clamp-2 group-hover:gradient-text">
                    {blog.title}
                  </h6>

                  {/* rich text component with line clamped to 2 lines */}
                  <div className="text-sm line-clamp-2">
                    <PortableText
                      value={blog.content}
                      components={RichTextComponents}
                    />
                  </div>
                  <h6 className="text-[10px] font-bold flex gap-1 mt-2 text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition">
                    {calculateDateTime(blog.releaseDate)}
                  </h6>
                </Link>
              </div>
            )
          )}
      </div>
    </div>
  );
}
