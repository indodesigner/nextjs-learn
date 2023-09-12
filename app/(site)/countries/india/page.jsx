import {
  getSlidesIndia,
  getIndianPackages,
} from "../../../../sanity/sanity-utils";
import HeroCarousel from "../../../../components/heroCarousel";

export default async function ExploreIndia() {
  const slidesIndia = await getSlidesIndia();
  // const packagesIndia = await getIndianPackages();
  return (
    <div>
      <HeroCarousel slides={slidesIndia} />
    </div>
  );
}
