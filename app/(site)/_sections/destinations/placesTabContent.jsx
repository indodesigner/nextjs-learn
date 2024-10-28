import PlaceCard from "@/_sections/destinations/placeCard";
import FadeUp from "@/components/animations/fadeUp";

export default async function PlacesTabContent({ places, language }) {
  return (
    <>
      <FadeUp delay="0.5">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3">
          <PlaceCard places={places} language={language} />
        </div>
      </FadeUp>
    </>
  );
}
