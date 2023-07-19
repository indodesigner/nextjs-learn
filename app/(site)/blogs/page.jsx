import { getBlogs } from "../../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import urlFor from "../../../components/urlFor";
import { BsImageAlt } from "react-icons/bs";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div className="max-w-3xl">
      <ul className="divide-y divide-neutral-300">
        {blogs.map((blog) => (
          <li className="mb-3 pt-2" key={blog._id}>
            <Link href={`blogs/${blog.slug}`}>
              <div className="flex">
                <div className="basis-2/5 sm:basis-1/5">
                  {blog.postImage ? (
                    <Image
                      src={urlFor(blog.postImage).url()}
                      width={500}
                      height={500}
                      className="object-cover h-24 rounded-md"
                      alt={blog.slug + "-image"}
                    ></Image>
                  ) : (
                    <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-md">
                      <div>
                        <BsImageAlt className="w-16 h-24 text-neutral-300" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-2 basis-3/5 sm:basis-4/5">
                  <h1 className="text-sm sm:text-md font-medium mb-2 line-clamp-2">
                    {blog.title}
                  </h1>
                  <h6 className="text-xs min-w-[80px] mb-2">
                    {blog.releaseDate}
                  </h6>

                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {blog.categories.map((categ) => (
                      <span className="grid place-items-center min-w-max text-xs font-normal border border-gray-300 rounded-full bg-gray-200 px-3">
                        <h6 className="text-xs text-neutral-700">{categ}</h6>
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
