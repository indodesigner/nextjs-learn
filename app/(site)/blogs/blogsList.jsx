"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "/utils/RichTextComponents";
import calculateDateTime from "/utils/calculateDateTime";
import urlFor from "/utils/urlFor";
import { useLanguage } from "/contexts/languageContext";
import { LuImageOff } from "react-icons/lu";
import FadeUp from "@/components/animations/fadeUp";

const BlogsList = ({ blogs }) => {
  const { language } = useLanguage();

  return (
    <div className="sm:mt-8">
      <FadeUp>
        <h2 className="text-3xl font-extrabold my-4">
          {language === "english" ? "Blogs" : "ブログ"}
        </h2>
      </FadeUp>
      <FadeUp delay="0.2">
        <ul className="divide-y divide-neutral-500 divide-opacity-20 bg-opacity-20 dark:bg-opacity-25 bg-neutral-300 dark:bg-neutral-500 rounded-xl dark:border-[1px] dark:border-neutral-400 dark:border-opacity-20">
          {blogs &&
            blogs.map((blog) => (
              // display blog items as list

              <li className="group p-1" key={blog._id}>
                <Link href={`blogs/${blog.slug}`}>
                  <div className="flex hover:bg-neutral-50 hover:dark:bg-neutral-800 hover:bg-opacity-30 hover:dark:bg-opacity-30 transition p-1 rounded-md">
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
                      <div className="flex flex-col-reverse sm:flex sm:flex-row justify-between">
                        <h5 className="text-sm sm:text-md md:text-lg font-bold mb-2 line-clamp-3 group-hover:gradient-text">
                          {blog.title}
                        </h5>
                        <h6 className="text-[10px] font-bold min-w-[80px] pt-1 sm:text-right">
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

                      {/* grid to display blog categories inside blogs list */}
                      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">
                        {blog.place &&
                          blog.place.map((place, index) => (
                            <span key={index} className="min-w-max">
                              <h6 className="text-xs font-bold text-red-500">
                                #{place}
                              </h6>
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </FadeUp>
    </div>
  );
};

export default BlogsList;
