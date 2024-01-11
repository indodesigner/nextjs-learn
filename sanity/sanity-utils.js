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
    groq`*[_type == "slide"] | order(_createdAt asc){
        _id,
        title,
        titlejp,
        caption,
        captionjp,
        "slideImage": slideImage.asset->url,
        "alt": slideImage.alt,
      }`
  );
}

export async function getSlidesIndia() {
  return client.fetch(
    groq`*[_type == "slideIndia"] | order(_createdAt desc){
        _id,
        title,
        titlejp,
        caption,
        captionjp,
        "slideImage": slideImage.asset->url,
        "alt": slideImage.alt,
      }`
  );
}

export async function getSlidesJapan() {
  return client.fetch(
    groq`*[_type == "slideJapan"] | order(_createdAt desc){
        _id,
        title,
        titlejp,
        caption,
        captionjp,
        "slideImage": slideImage.asset->url,
        "alt": slideImage.alt,
      }`
  );
}

export async function getPlaces() {
  return client.fetch(
    groq`*[_type == "place"] | order(_createdAt desc){
        _id,
        placeName,
        placeNamejp,
        "slug": slug.current,
        placeImages[0]{asset->{url}},
        "alt": coalesce(placeImages[0].alt, "Image of the destination"),
        "placeTypes":placeType[]->{
          "placeTypeName":placeTypeName,
          "placeTypeNamejp":placeTypeNamejp
        },
        "country":country[]->name,
        content,
        contentjp,
      }`
  );
}

export async function getPlace({ slug }) {
  return client.fetch(
    groq`*[_type == "place" && slug.current == "${slug}"][0] {
        _id,
        placeName,
        placeNamejp,
        "slug": slug.current,
        placeImages[] {
          asset->{
            url
          },
          alt,
          caption
        },
        "placeTypes":placeType[]->{
          "placeTypeName":placeTypeName,
          "placeTypeNamejp":placeTypeNamejp,
          "slug": slug.current
        },
        "country":country[]->name,
        "countryjp":country[]->namejp,
        content,
        contentjp,
      }`
  );
}

export async function getPackages() {
  return client.fetch(
    groq`*[_type == "tourPackage"] | order(_createdAt desc){
        _id,
        packageName,
        packageNamejp,
        "slug": slug.current,
        packageImages[0]{asset->{url}},
        "alt": coalesce(packageImages[0].alt, "Image of the tour package"),
        "category": category[]->name,
        "packageFilter": packageFilter[]->name,
        departureDate,
        returnDate,
        duration,
        rate,
        "place": place[]->{
          "placeName": placeName,
          "placeNamejp": placeNamejp
        },
        "placeTypes":placeType[]->{
          "placeTypeName":placeTypeName,
          "placeTypeNamejp":placeTypeNamejp
        },
        "country":country[]->name,
        content,
        contentjp,
      }`
  );
}

export async function getPackage({ slug }) {
  return client.fetch(
    groq`*[_type == "tourPackage" && slug.current == "${slug}"][0] {
        _id,
        packageName,
        packageNamejp,
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
        duration,
        rate,
        "place": place[]->{
          "placeName": placeName,
          "placeNamejp": placeNamejp,
          placeImages[0]{asset->{url}},
          "alt": coalesce(placeImages[0].alt, "Image of the destination"),
          "slug": slug.current,
          "placeTypes":placeType[]->{
            "placeTypeName":placeTypeName,
            "placeTypeNamejp":placeTypeNamejp
          }
        },
        "placeTypes":placeType[]->{
          "placeTypeName":placeTypeName,
          "placeTypeNamejp":placeTypeNamejp,
          "slug": slug.current
        },
        "country":country[]->name,
        "countryjp":country[]->namejp,
        summary,
        summaryjp,
        content,
        contentjp,
        inclusions,
        inclusionsjp
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

export async function getPlaceTypes() {
  return client.fetch(
    groq`*[_type == "placeType"] | order(_createdAt desc){
        _id,
        placeTypeName,
        placeTypeNamejp,
        "slug": slug.current,
        "placeTypeIcon": placeTypeIcon.asset->url,
        placeTypeImages[0]{asset->{url}},
        "alt": coalesce(placeTypeImages[0].alt, "Image of the destination Type"),
        content,
        contentjp,
      }`
  );
}

export async function getPlaceType({ slug }) {
  return client.fetch(
    groq`*[_type == "placeType" && slug.current == "${slug}"][0] {
        _id,
        placeTypeName,
        placeTypeNamejp,
        "slug": slug.current,
        placeTypeImages[] {
          asset->{
            url
          },
          alt,
          caption
        },
        content,
        contentjp,
      }`
  );
}
