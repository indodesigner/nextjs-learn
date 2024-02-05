import PlacesTabs from "@/components/destinations/placesTabs";
import { getPlaces, getPlaceTypes } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import GetInTouch from "@/components/getInTouch";
import Advertisement from "@/components/advertisement";

export const metadata = {
  title:
    "Explore the Best of Japan and India: Top Places to Visit & Exclusive Tour Packages",
  description:
    "Discover the allure of Japan and the beauty of India with our comprehensive guide to the best places to visit. From iconic landmarks to hidden gems, plan your journey with insights and book exclusive tour packages for an unforgettable adventure. Immerse yourself in culture, history, and scenic landscapes with Niko Travels",
};

export default async function Places() {
  const places = await getPlaces(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)
  const placeTypes = await getPlaceTypes();

  const indianPlaces = places.filter((place) => {
    return place.country && place.country.includes("India");
  });
  const japanesePlaces = places.filter((place) => {
    return place.country && place.country.includes("Japan");
  });

  return (
    <>
      <div className="container mt-0 lg:mt-16">
        <PlacesTabs
          indianPlaces={indianPlaces}
          japanesePlaces={japanesePlaces}
          placeTypes={placeTypes}
        />
      </div>
      <div className="container">
        <GetInTouch />
      </div>
      <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mt-2" />
      <div className="container">
        <Advertisement />
      </div>
      <GetCountry country={null} />
    </>
  );
}

export const revalidate = 10;
