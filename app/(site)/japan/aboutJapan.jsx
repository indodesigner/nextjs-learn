"use client";
import Image from "next/image";
import JapanMapImage from "/public/images/map-japan.png";
import { useLanguage } from "/contexts/languageContext";

const AboutJapan = () => {
  const { language } = useLanguage();

  return (
    <section className="container">
      <h2 className="text-3xl font-bold mb-4">
        {language === "english" ? "About Japan" : "日本について"}
      </h2>
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4 bg-neutral-100 dark:bg-neutral-700 bg-opacity-30 dark:bg-opacity-30 shadow-lg py-2 px-4 rounded-2xl">
        <Image
          src={JapanMapImage}
          width={500}
          height={400}
          alt="japan in globe image"
          className="w-auto h-auto"
        ></Image>
        {language === "english" ? (
          <p className="text-sm">
            Discover the captivating allure of Japan, a land where ancient
            traditions harmonize with cutting-edge modernity. Immerse yourself
            in the vibrant tapestry of cherry blossoms, historic temples, and
            futuristic cities. Traverse Tokyo's bustling streets, where neon
            lights and traditional markets coexist seamlessly. Experience the
            serenity of Kyoto's iconic bamboo forests and timeless tea
            ceremonies. Indulge in culinary delights, from sushi masterpieces to
            savory ramen. Explore the cultural richness of Hiroshima's Peace
            Memorial Park and the majestic Mount Fuji. Japan, a fusion of past
            and present, beckons you to embark on a journey of unparalleled
            beauty, innovation, and cultural enchantment.
          </p>
        ) : (
          <p>
            古代から伝わる国、日本の魅力を発見してください。
            伝統と最先端の現代性が調和します。あなた自身に浸る
            鮮やかな桜のタペストリーの中で、歴史ある寺院や
            未来的な都市。ネオンが輝く東京の賑やかな通りを散策
            照明と伝統的な市場がシームレスに共存しています。を体験してください
            京都を代表する竹林の静けさと時代を超えたお茶 儀式。傑作寿司から、
            おいしいラーメン。広島の平和の文化の豊かさを探る
            記念公園と雄大な富士山。過去と融合した日本
            そして今、あなたを比類のない旅へと誘います
            美しさ、革新性、そして文化的な魅力。
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutJapan;
