import { getSlides } from "../../sanity/sanity-utils";
import BlogSection from "../../components/blogs";
import HeroCarousel from "../../components/heroCarousel";

export default async function HomePage() {
  const slides = await getSlides();
  return (
    <div>
      <HeroCarousel slides={slides} />

      <section className="container">
        <BlogSection />
      </section>
    </div>
  );
}
