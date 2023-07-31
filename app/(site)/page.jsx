// import Image from "next/image";
// import Link from "next/link";
// import { getBlogs } from "../../sanity/sanity-utils";
// import urlFor from "../../components/urlFor";
// import { LuImageOff } from "react-icons/lu";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "../../components/RichTextComponents";
// import calculateDateTime from "./utils/calculateDateTime";
import BlogSection from "../../components/blogs";
import HeroCarousel from "../../components/heroCarousel";

export default async function HomePage() {
  // const blogs = await getBlogs(); //fetch blogs from sanity query can be fount in (sanity/sanity-utils.js)

  return (
    <div>
      <HeroCarousel />

      <section className="container">
        <BlogSection />
      </section>
    </div>
  );
}
