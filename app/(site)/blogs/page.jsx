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
            <Link href={`blogs/${blog.slug}`}>
              <div className="flex">
                {blog.postImage ? (
                  <Image
                    src={urlFor(blog.postImage).url()}
                    width={800}
                    height={500}
                    className="object-cover w-48 h-24 rounded-xl"
                  ></Image>
                ) : (
                  <Image
                    src={noPostImage}
                    width={100}
                    height={100}
                    className="object-cover w-48 h-24 rounded-xl"
                  ></Image>
                )}
                <div>
                  <h1 className="text-sm sm:text-md md:text-lg font-medium ps-3">
                    {blog.title}
                  </h1>
                  <h6 className="text-xs px-3 pt-2 min-w-[80px]">
                    {blog.releaseDate}
                  </h6>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
