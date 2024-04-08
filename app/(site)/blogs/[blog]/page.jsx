import { getBlog } from "/sanity/sanity-utils";
import BlogContent from "../blogContent";

const Blog = async ({ params }) => {
  const slug = params.blog;
  const blog = await getBlog({ slug });

  const placeName =
    Array.isArray(blog.place && blog.place) && blog.place.length > 0
      ? blog.place.map((item) => item.toLowerCase())
      : "";
  return (
    <div className="container mt-0 md:mt-24">
      <BlogContent blog={blog} placeName={placeName} />
    </div>
  );
};

export default Blog;

export const revalidate = 10;
