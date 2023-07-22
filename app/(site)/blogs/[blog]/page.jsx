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
    <div>
      <div className="flex items-center mb-3">
        <Link href="/blogs" className="link-hover">
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
      <div className="mb-4 px-4">
        <PortableText value={blog.content} components={RichTextComponents} />
      </div>
      {blog.href ? (
        <Link
          href={blog.href}
          rel="noopener noreferrer"
          target="_blank"
          className="bg-purple-600 px-4 py-1 rounded-2xl hover:bg-purple-700 transition duration-200"
        >
          {blog.href}
        </Link>
      ) : null}
    </div>
  );
};

export default Blog;
