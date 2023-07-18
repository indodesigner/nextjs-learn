// "use client";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import Link from "next/link";
import Image from "next/image";
import { getBlog } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import urlFor from "../../../../components/urlFor";
import noPostImage from "../../../../images/no-post-image.png";


const Blog = async ({ params }) => {
  const slug = params.blog;
  const blog = await getBlog({ slug });
  return (
    <div className="max-w-5xl">
      {blog.postImage ? (
                  <Image
                    src={urlFor(blog.postImage).url()}
                    width={1080}
                    height={480}
                    className="h-auto max-w-full mb-4"
                  ></Image>
                ) : (

                  <figure className="flex justify-center mb-6">
                  <Image
                    src={noPostImage}
                    width={100}
                    height={100}
                    className="object-cover max-w-7xl max-h-xl item-center"
                  ></Image>
                  </figure>
                )}
      <h2 className="text-md sm:text-lg md:text-2xl font-bold">{blog.title}</h2>
      <h6 className="text-xs font-medium mb-4">{blog.releaseDate}</h6>
      
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
