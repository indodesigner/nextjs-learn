import { RichTextComponents } from "../../../../components/RichTextComponents";
import Link from "next/link";
import Image from "next/image";
import { getBlog } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import urlFor from "../../../../components/urlFor";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";
import calculateDateTime from "../../../../utils/calculateDateTime";

const Blog = async ({ params }) => {
  const slug = params.blog;
  const blog = await getBlog({ slug });

  const placeName =
    Array.isArray(blog.place) && blog.place.length > 0
      ? blog.place.map((item) => item.toLowerCase())
      : "";
  return (
    <div className="container mt-0 md:mt-24">
      <div className="flex items-center mb-3">
        <Link href="/blogs" className="gradient-text pb-[2px]">
          Blogs
        </Link>
        <h6 className="text-sm">
          <BsChevronRight className="pt-[1px]" />
        </h6>
        {/* <div className="flex gap-1">
          {blog.place !== null ? (
            blog.place.map((item) => (
              <h6 className="text-sm pt-[3px]">{item}</h6>
            ))
          ) : (
            <h6 className="text-sm ">Somewhere on earth</h6>
          )}
        </div> */}

        {placeName.map((item, index) => (
          <Link
            key={index}
            href={`/places/${item}`}
            className=" text-neutral-50 mx-1 bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-800 rounded-2xl px-3 text-sm pb-[2px] font-medium"
          >
            {item}
          </Link>
        ))}
      </div>

      <h2 className="text-md sm:text-lg md:text-2xl font-bold">{blog.title}</h2>

      {blog.postImage ? (
        <Image
          src={urlFor(blog.postImage).url()}
          width={1080}
          height={480}
          className="mb-4 h-[400px] object-cover rounded-md"
          alt={`${blog.slug}-image`}
        ></Image>
      ) : (
        <div className="flex justify-center my-8">
          <BsImageAlt className="w-16 h-16 text-white" />
        </div>
      )}

      <div className="mb-4 px-4">
        <PortableText value={blog.content} components={RichTextComponents} />
      </div>
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
      <hr className="mt-4 border-neutral-400 border-opacity-20" />

      <div className="flex justify-end my-3 gap-2">
        <h6 className="text-sm">Posted on</h6>
        <h6 className="text-sm">{calculateDateTime(blog.releaseDate)}</h6>
      </div>
    </div>
  );
};

export default Blog;
