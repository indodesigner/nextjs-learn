import { getBlogs } from "../../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import urlFor from "../../../components/urlFor";
import { BsImageAlt } from "react-icons/bs";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";
import calculateDateTime from "../utils/calculateDateTime";

export default async function Blogs() {
  const blogs = await getBlogs(); //fetch blogs from sanity query can be fount in (sanity/sanity-utils.js)
  return (
    <div>
      <h1 className="text-4xl font-bold my-4">Blogs</h1>

      <ul className="card divide-y divide-neutral-500 divide-opacity-20">
        {blogs &&
          blogs.map((blog) => (
            // display blog items as list
            <li className="group p-1" key={blog._id}>
              <Link href={`blogs/${blog.slug}`}>
                <div className="flex hover:bg-neutral-200 hover:dark:bg-neutral-900 hover:bg-opacity-40 hover:dark:bg-opacity-40 transition p-1 rounded-md">
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
                        alt={`${blog.slug}-image`}
                      ></Image>
                    ) : (
                      // else part for no blog image
                      <div className="grid place-items-center border border-neutral-700 bg-neutral-800 rounded-md">
                        <div>
                          <BsImageAlt className="w-16 h-24 text-neutral-500" />
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
                        blog.categories.map((categ) => (
                          <span className="min-w-max">
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
    </div>
  );
}
