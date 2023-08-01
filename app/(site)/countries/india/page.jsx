import { getSlidesIndia } from "../../../../sanity/sanity-utils";
import HeroCarousel from "../../../../components/heroCarousel";

export default async function ExploreIndia() {
  const slidesIndia = await getSlidesIndia();

  return (
    <div>
      <HeroCarousel slides={slidesIndia} />
    </div>
  );
}
