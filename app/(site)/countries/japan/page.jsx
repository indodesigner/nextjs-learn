import { getSlidesJapan } from "/sanity/sanity-utils";
import HeroCarousel from "/components/heroCarousel";

export default async function ExploreJapan() {
  const slidesJapan = await getSlidesJapan();

  return (
    <div>
      <HeroCarousel slides={slidesJapan} />
    </div>
  );
}
