import { getBlogs } from "../../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import urlFor from "../../../components/urlFor";
import noPostImage from "../../../images/no-post-image.png";

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-5xl">
      <ul className="divide-y divide-neutral-300">
        {blogs.map((blog) => (
          <li className="mb-3 pt-2" key={blog._id}>
            <Link href={`blogs/${blog.slug}`} className="flex">
              <div className="w-48 h-auto basis-1/4">
                {blog.postImage ? (
                  <Image
                    src={urlFor(blog.postImage).url()}
                    width={200}
                    height={200}
                    className="object-cover h-24 rounded-xl"
                  ></Image>
                ) : (
                  <Image
                    src={noPostImage}
                    width={200}
                    height={200}
                    className="object-cover h-24 rounded-xl"
                  ></Image>
                )}
              </div>

              <div className="px-2 basis-3/4">
                <h1 className="text-sm sm:text-md md:text-lg font-medium mb-2 line-clamp-2">
                  {blog.title}
                </h1>
                <h6 className="text-xs min-w-[80px] mb-2">
                  {blog.releaseDate}
                </h6>

                <div className="flex items-center gap-2">
                  {blog.categories.map((categ) => (
                    <span className="flex-initial max-w-full leading-none text-xs font-normal border border-gray-300 rounded-full bg-gray-200 px-3">
                      <h6 className="text-xs">{categ}</h6>
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
