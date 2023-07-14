"use client";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import Link from "next/link";
import { getBlog } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

const Blog = async ({ params }) => {
  const slug = params.blog;
  const blog = await getBlog({ slug });
  return (
    <div className="max-w-5xl">
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <h6 className="text-xs font-medium mb-10">{blog.releaseDate}</h6>
      <PortableText value={blog.content} components={RichTextComponents} />
      {blog.href ?
        <Link href={blog.href} rel="noopener noreferrer" target="_blank">
          {blog.href}
        </Link>
      :null}
    </div>
  );
};

export default Blog;
