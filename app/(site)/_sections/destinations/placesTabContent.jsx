import PlaceCard from "@/_sections/destinations/placeCard";

export default async function PlacesTabContent({ places, language }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3">
      <PlaceCard places={places} language={language} />
    </div>
  );
}
