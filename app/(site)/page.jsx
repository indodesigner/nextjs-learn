import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "../../sanity/sanity-utils";
import urlFor from "../../components/urlFor";
import { BsImageAlt } from "react-icons/bs";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";

async function HomePage() {
  const blogs = await getBlogs(); //fetch blogs from sanity query can be fount in (sanity/sanity-utils.js)

  const firstBlog = blogs[0]; //copy first blog item from blogs array
  const remainingBlogs = blogs.slice(1, 5); //copy remaining 4 blog item from blogs array

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Home</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa autem hic
        sapiente ad! Repellat nihil odit veniam quaerat veritatis cupiditate
        harum? Eligendi quas, animi sapiente impedit facilis eius magni sit.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-2">Latest</h2>

      {/* main grid of two cols */}
      <div className="grid grid-cols-2 gap-2">
        {firstBlog && (
          <Link
            id={firstBlog._id}
            href={`blogs/${firstBlog.slug}`}
            className="p-2 backdrop-filter backdrop-blur-xl bg-opacity-25 bg-neutral-500 rounded-md border-[1px] border-neutral-500 border-opacity-20 hover:bg-neutral-900 hover:bg-opacity-50 hover:drop-shadow-md transition duration-300"
          >
            {firstBlog.postImage ? (
              <Image
                src={urlFor(firstBlog.postImage).url()}
                width={800}
                height={500}
                alt={`${firstBlog.slug}-image`}
                className="object-cover h-64 rounded-md"
              ></Image>
            ) : (
              // else part for no blog image
              <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-md">
                <div>
                  <BsImageAlt className="w-16 h-64 text-neutral-300" />
                </div>
              </div>
            )}

            <h6 className="text-sm sm:text-md font-bold mt-2 mb-1">
              {firstBlog.title}
            </h6>

            {/* rich text component with line clamped to 2 lines */}
            <div className="text-sm line-clamp-4">
              <PortableText
                value={firstBlog.content}
                components={RichTextComponents}
              />
            </div>
          </Link>
        )}

        {/* second 2 rows 2 cols grid inside parent grid of 2 cols */}
        <div className="grid grid-rows-2 grid-cols-2 gap-2">
          {remainingBlogs &&
            remainingBlogs.map((blog) => (
              <Link
                id={blog._id}
                href={`blogs/${blog.slug}`}
                className="p-2 backdrop-filter backdrop-blur-xl bg-opacity-25 bg-neutral-500 rounded-md border-[1px] border-neutral-500 border-opacity-20 hover:bg-neutral-900 hover:bg-opacity-50 hover:drop-shadow-md transition duration-300"
              >
                {blog.postImage ? (
                  <Image
                    src={urlFor(blog.postImage).url()}
                    width={800}
                    height={500}
                    alt={`${blog.slug}-image`}
                    className="object-cover h-24 rounded-md"
                  ></Image>
                ) : (
                  // else part for no blog image
                  <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-md">
                    <div>
                      <BsImageAlt className="w-16 h-24 text-neutral-300" />
                    </div>
                  </div>
                )}

                <h6 className="text-sm sm:text-md font-bold mt-2 mb-1">
                  {blog.title}
                </h6>

                {/* rich text component with line clamped to 2 lines */}
                <div className="text-sm line-clamp-2">
                  <PortableText
                    value={blog.content}
                    components={RichTextComponents}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
