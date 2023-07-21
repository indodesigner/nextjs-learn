import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "../../sanity/sanity-utils";
import urlFor from "../../components/urlFor";
import { BsImageAlt } from "react-icons/bs";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";

async function HomePage() {
  const blogs = await getBlogs();

  const fourBlogs = blogs.slice(0, 5);
  const firstBlog = [...fourBlogs.slice(0, 1)];
  const remainingBlogs = fourBlogs.slice(1);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Home</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa autem hic
        sapiente ad! Repellat nihil odit veniam quaerat veritatis cupiditate
        harum? Eligendi quas, animi sapiente impedit facilis eius magni sit.
      </p>

      <h2 className="text-lg font-bold mt-8 mb-2">Latest</h2>
      <div className="grid grid-cols-2 gap-2">
        {firstBlog &&
          firstBlog.map((blog) => (
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
                  className="object-cover h-64 rounded-md"
                ></Image>
              ) : (
                <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-md">
                  <div>
                    <BsImageAlt className="w-16 h-64 text-neutral-300" />
                  </div>
                </div>
              )}

              <h6 className="text-sm sm:text-md font-bold mt-2 mb-1">
                {blog.title}
              </h6>
              <p className="text-sm line-clamp-4">
                <PortableText
                  value={blog.content}
                  components={RichTextComponents}
                />
              </p>
            </Link>
          ))}

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
                  <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-md">
                    <div>
                      <BsImageAlt className="w-16 h-24 text-neutral-300" />
                    </div>
                  </div>
                )}

                <h6 className="text-sm sm:text-md font-bold mt-2 mb-1">
                  {blog.title}
                </h6>
                <p className="text-sm line-clamp-2">
                  <PortableText
                    value={blog.content}
                    components={RichTextComponents}
                  />
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
