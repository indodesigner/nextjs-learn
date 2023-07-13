import { getBlog } from "@/sanity/sanity-utils";

const Blog = async ({ params }) => {
  const slug = params.blog;
  const blog = await getBlog({ slug });
  return (
    <div className="max-w-5xl">
      <div>{blog.title}</div>
      <div>{blog.releaseDate}</div>

      <div>{blog.content}</div>
    </div>
  );
};

export default Blog;
