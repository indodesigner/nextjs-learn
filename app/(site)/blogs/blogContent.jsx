"use client";
import { RichTextComponents } from "/utils/RichTextComponents";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import urlFor from "/utils/urlFor";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";
import calculateDateTime from "/utils/calculateDateTime";
import BackButton from "@/components/backButton";
import { useLanguage } from "/contexts/languageContext";
import FadeUp from "@/components/animations/fadeUp";

const BlogContent = ({ blog, placeName }) => {
  const { language } = useLanguage();

  return (
    <>
      <FadeUp>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <Link href="/blogs" className="gradient-text pb-[2px]">
              Blogs
            </Link>
            <h6 className="text-sm">
              <BsChevronRight className="pt-[1px]" />
            </h6>

            {placeName &&
              placeName.map((item, index) => (
                <Link
                  key={index}
                  href={`/places/${item}`}
                  className=" text-neutral-50 mx-1 bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-800 rounded-2xl px-3 text-sm pb-[2px] font-medium"
                >
                  {item}
                </Link>
              ))}
          </div>
          <BackButton language={language} />
        </div>
      </FadeUp>
      <FadeUp delay="0.1">
        <h2 className="text-md sm:text-lg md:text-3xl font-bold mb-2">
          {blog.title}
        </h2>
      </FadeUp>

      <FadeUp delay="0.2">
        {blog.postImage ? (
          <Image
            src={urlFor(blog.postImage).url()}
            width={1080}
            height={480}
            className="mb-4 aspect-video sm:h-[400px] object-cover rounded-md"
            alt={blog.alt}
          ></Image>
        ) : // (
        //   <div className="flex justify-center my-8">
        //     <BsImageAlt className="w-16 h-16 text-white" />
        //   </div>
        // )
        null}
      </FadeUp>

      <FadeUp delay="0.3">
        <article className="mb-4 px-3 sm:px-0">
          <PortableText value={blog.content} components={RichTextComponents} />
        </article>
      </FadeUp>

      <FadeUp delay="0.2">
        {blog.href ? (
          <Link
            href={blog.href}
            rel="noopener noreferrer"
            target="_blank"
            className="btn-primary"
          >
            {blog.href}
          </Link>
        ) : null}
      </FadeUp>
      <hr className="mt-4 border-neutral-400 border-opacity-20" />

      <FadeUp delay="0.2">
        <div className="flex justify-end my-3 gap-2">
          <h6 className="text-sm">Posted on</h6>
          <h6 className="text-sm">{calculateDateTime(blog.releaseDate)}</h6>
        </div>
      </FadeUp>
    </>
  );
};

export default BlogContent;
