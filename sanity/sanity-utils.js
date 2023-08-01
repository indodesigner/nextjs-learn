import { groq } from "next-sanity";
import client from "../lib/sanity";

export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "blog"] | order(releaseDate desc){
        _id,
        title,
        "slug": slug.current,
        categories,
        releaseDate,
        "postImage": postImage.asset->url,
        content,
        href,
      }`
  );
}

export async function getBlog({ slug }) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == "${slug}"][0]{
          _id,
          title,
          "slug": slug.current,
          categories,
          releaseDate,
          "postImage": postImage.asset->url,
          content,
          href,
        }`
  );
}

export async function getSlides() {
  return client.fetch(
    groq`*[_type == "slide"] | order(releaseDate asc){
        _id,
        title,
        caption,
        "slideImage": slideImage.asset->url,
      }`
  );
}
export async function getSlidesIndia() {
  return client.fetch(
    groq`*[_type == "slideIndia"] | order(releaseDate asc){
        _id,
        title,
        caption,
        "slideImage": slideImage.asset->url,
      }`
  );
}
export async function getSlidesJapan() {
  return client.fetch(
    groq`*[_type == "slideJapan"] | order(releaseDate asc){
        _id,
        title,
        caption,
        "slideImage": slideImage.asset->url,
      }`
  );
}
