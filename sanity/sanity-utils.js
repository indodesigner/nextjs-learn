import { groq } from "next-sanity";
import client from "/lib/sanity";

export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "blog"] | order(releaseDate desc){
        _id,
        title,
        "slug": slug.current,
        "place": place[]->placeName,
        releaseDate,
        "postImage": postImage.asset->url,
        "alt": postImage.alt,
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
          "place": place[]->placeName,
          releaseDate,
          "postImage": postImage.asset->url,
          "alt": postImage.alt,
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
        "alt": slideImage.alt,
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
        "alt": slideImage.alt,
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
        "alt": slideImage.alt,
      }`
  );
}

export async function getPlaces() {
  return client.fetch(
    groq`*[_type == "place"] | order(createdAt desc){
        _id,
        placeName,
        "slug": slug.current,
        placeImages[0]{asset->{url}},
        "alt": coalesce(placeImages[0].alt, "Image of the destination"),
        "country":country[]->name,
        content,
      }`
  );
}

export async function getPlace({ slug }) {
  return client.fetch(
    groq`*[_type == "place" && slug.current == "${slug}"][0] {
        _id,
        placeName,
        "slug": slug.current,
        placeImages[] {
          asset->{
            url
          },
          alt,
          caption
        },
        "country":country[]->name,slug,
        content,
      }`
  );
}

export async function getPackages() {
  return client.fetch(
    groq`*[_type == "tourPackage"] | order(createdAt desc){
        _id,
        packageName,
        "slug": slug.current,
        packageImages[0]{asset->{url}},
        "alt": coalesce(packageImages[0].alt, "Image of the tour package"),
        "category": category[]->name,
        "packageFilter": packageFilter[]->name,
        departureDate,
        returnDate,
        rate,
        "place":place[]->placeName,
        "country":country[]->name,
        content,
      }`
  );
}

export async function getPackage({ slug }) {
  return client.fetch(
    groq`*[_type == "tourPackage" && slug.current == "${slug}"][0] {
        _id,
        packageName,
        "slug": slug.current,
        packageImages[] {
          asset->{
            url
          },
          alt,
          caption
        },
        departureDate,
        returnDate,
        rate,
        "place": place[]->{
          "placeName": placeName,
          "slug": slug.current
        },
        "country":country[]->name,
        content,
      }`
  );
}

// export async function getFilters() {
//   return client.fetch(
//     groq`*[_type == "packageFilter"]{
//       name
//       }`
//   );
// }
