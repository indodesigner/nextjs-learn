import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "/sanity/sanity-utils";
import urlFor from "/utils/urlFor";
import { LuImageOff, LuChevronRight } from "react-icons/lu";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "/utils/RichTextComponents";
import calculateDateTime from "/utils/calculateDateTime";

export default async function BlogSection({ language }) {
  const blogs = await getBlogs(); //fetch blogs from sanity query can be fount in (sanity/sanity-utils.js)
  const showViewAllLink = blogs.length > 3;

  return (
    <>
      {blogs != 0 ? (
        <div className="flex justify-between mb-4 px-1">
          <h4 className="text-xl sm:text-2xl font-bold">
            {language === "english" ? "Latest Blogs" : "最新のブログ"}
          </h4>
          {showViewAllLink && (
            <Link
              href="/blogs"
              className="button-primary group text-xs font-medium"
            >
              {language === "english" ? "View all" : "すべて見る"}
            </Link>
          )}
        </div>
      ) : null}

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogs &&
          blogs.slice(0, 5).map((blog, index) => (
            <div key={index} className="grid grid-cols-1">
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
                    alt={blog.alt}
                    className="object-cover aspect-video rounded-md"
                  ></Image>
                ) : (
                  // else part for no blog image
                  <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                    <div>
                      <LuImageOff className="w-16 h-32 text-neutral-300 dark:text-neutral-500" />
                    </div>
                  </div>
                )}
                <div className="flex gap-1 px-2">
                  {blog.place &&
                    blog.place.map((item, index) => (
                      <h6
                        key={index}
                        className="text-[10px] font-bold text-primary-color pt-[3px]"
                      >
                        {item.toUpperCase()}
                      </h6>
                    ))}
                </div>

                <h6 className="px-2 text-sm sm:text-md font-bold my-2 line-clamp-3 group-hover:gradient-text">
                  {blog.title}
                </h6>

                {/* rich text component with line clamped to 2 lines */}
                {/* <div className="px-2 text-xs line-clamp-2">
                    <PortableText
                      value={blog.content}
                      components={RichTextComponents}
                    />
                  </div> */}
                <h6 className="px-2 mb-2 text-[10px] font-bold flex gap-1 mt-2 text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition">
                  {calculateDateTime(blog.releaseDate)}
                </h6>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export const revalidate = 10;
