// "use client";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import Link from "next/link";
import Image from "next/image";
import { getBlog } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import urlFor from "../../../../components/urlFor";
import {
  BsImageAlt,
  BsChevronRight,
  BsFillCalendar2WeekFill,
} from "react-icons/bs";

const Blog = async ({ params }) => {
  const slug = params.blog;
  const blog = await getBlog({ slug });

  return (
    <div className="max-w-3xl">
      <div className="flex items-center mb-3">
        <Link
          href="/blogs"
          className="cursor-pointer bg-white text-sm font-medium hover:text-violet-300 rounded-3xl px-2 py-1 bg-opacity-20 transition"
        >
          Blogs
        </Link>
        <h6 className="text-sm">
          <BsChevronRight />
        </h6>
        <h6 className="text-sm">{blog.title}</h6>
      </div>

      {blog.postImage ? (
        <Image
          src={urlFor(blog.postImage).url()}
          width={1080}
          height={480}
          className="mb-4"
          alt={`${blog.slug}-image`}
        ></Image>
      ) : (
        <div className="flex justify-center my-8">
          <BsImageAlt className="w-16 h-16 text-white" />
        </div>
      )}
      <h2 className="text-md sm:text-lg md:text-2xl font-bold">{blog.title}</h2>
      <h6 className="text-sm flex gap-1 mb-4">
        <BsFillCalendar2WeekFill className="w-4 h-4" />
        {blog.releaseDate}
      </h6>
      <PortableText value={blog.content} components={RichTextComponents} />
      {blog.href ? (
        <Link href={blog.href} rel="noopener noreferrer" target="_blank">
          {blog.href}
        </Link>
      ) : null}
    </div>
  );
};

export default Blog;
