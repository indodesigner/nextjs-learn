import { createClient, groq } from "next-sanity";
import config from "@/sanity/config/config";

const client = createClient(config);

export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "blog"] | order(releaseDate desc){
        _id,
        title,
        "slug": slug.current,
        releaseDate,
        content,
        href
      }`
  );
}

export async function getBlog({slug}) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == "${slug}"][0]{
          _id,
          title,
          "slug": slug.current,
          releaseDate,
          content,
          href
        }`
  );
}
