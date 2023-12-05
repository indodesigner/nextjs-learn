import PlacesTabs from "@/components/destinations/placesTabs";
import { getPlaces } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";

export default async function Places() {
  const places = await getPlaces(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const indianPlaces = places.filter((place) => {
    return place.country && place.country.includes("India");
  });
  const japanesePlaces = places.filter((place) => {
    return place.country && place.country.includes("Japan");
  });

  return (
    <div className="container mt-0 md:mt-24">
      <PlacesTabs indianPlaces={indianPlaces} japanesePlaces={japanesePlaces} />
      <GetCountry country={null} />
    </div>
  );
}

export const revalidate = 10;
