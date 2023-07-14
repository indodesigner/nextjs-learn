import { getBlogs } from "../../../sanity/sanity-utils";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div className="max-w-5xl">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-5" key={blog._id}>
            <Link href={`blogs/${blog.slug}`} >
              <div className="flex justify-between">
                <h1 className="text-lg font-medium">{blog.title}</h1>
                <span className="text-xs px-2">{blog.releaseDate}</span>
              </div>
              {/* <p className="text-sm line-clamp-2">{blog.content}</p> */}
  
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
