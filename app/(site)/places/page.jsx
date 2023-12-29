import PlacesTabs from "@/components/destinations/placesTabs";
import { getPlaces, getPlaceTypes } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import GetInTouch from "@/components/getInTouch";

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
      <div className="container mt-0 md:mt-24">
        <PlacesTabs
          indianPlaces={indianPlaces}
          japanesePlaces={japanesePlaces}
          placeTypes={placeTypes}
        />
      </div>
      <div className="container">
        <GetInTouch />
      </div>
      <GetCountry country={null} />
    </>
  );
}

export const revalidate = 10;
