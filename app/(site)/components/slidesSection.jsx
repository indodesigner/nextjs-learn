import HeroCarousel from "@/components/heroCarousel";

export default async function SlidesSection({ slides }) {
  return (
    <div>
      <section className="p-4 md:px-8 md:py-20 lg:py-[86px] lg:px-16">
        <HeroCarousel slides={slides} />
      </section>
    </div>
  );
}
