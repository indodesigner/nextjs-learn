import { getBlogs } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div className="max-w-5xl">
      <ul>
        {blogs.map((blog) => (
          <li>
            <Link href={`blogs/${blog.slug}`} key={blog._id}>
              <div className="flex justify-between">
                <h1 className="text-lg font-medium">{blog.title}</h1>
                <span className="text-xs px-2">{blog.releaseDate}</span>
              </div>
              <p className="text-sm">{blog.content}</p>
              {/* <Link href={blog.href} rel="noopener noreferrer" target="_blank">
              {blog.href}
            </Link> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
