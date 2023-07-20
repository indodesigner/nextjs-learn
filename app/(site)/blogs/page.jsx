import { getBlogs } from "../../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import urlFor from "../../../components/urlFor";
import { BsImageAlt } from "react-icons/bs";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";
import { BsFillCalendar2WeekFill } from "react-icons/bs";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div className="max-w-3xl">
      <ul>
        {blogs.map((blog) => (
          <li
            className="group mb-3 p-2 backdrop-filter backdrop-blur-xl bg-opacity-25 bg-neutral-500 rounded-md border-[1px] border-neutral-500 border-opacity-20 hover:bg-neutral-900 hover:bg-opacity-50 hover:drop-shadow-md transition duration-300"
            key={blog._id}
          >
            <Link href={`blogs/${blog.slug}`}>
              <div className="flex">
                <div className="basis-1/4">
                  {blog.postImage ? (
                    <Image
                      src={urlFor(blog.postImage).width(500).height(300).url()}
                      width={500}
                      height={500}
                      className="object-cover h-24 rounded-md group-hover:drop-shadow-sm"
                      alt={`${blog.slug}-image`}
                    ></Image>
                  ) : (
                    <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-md">
                      <div>
                        <BsImageAlt className="w-16 h-24 text-neutral-300" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-2 basis-3/4">
                  <div className="flex justify-between">
                    <h1 className="text-sm sm:text-md font-medium mb-2 line-clamp-2">
                      {blog.title}
                    </h1>
                    <h6 className="text-[10px] min-w-[80px] flex gap-1 pt-1">
                      <BsFillCalendar2WeekFill className="w-3 h-3" />
                      {blog.releaseDate}
                    </h6>
                  </div>
                  <h6 className="line-clamp-2 text-xs mb-2">
                    <PortableText
                      value={blog.content}
                      components={RichTextComponents}
                    />
                  </h6>

                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">
                    {blog.categories.map((categ) => (
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
