"use client";
import Image from "next/image";
import IndiaMapImage from "/public/images/map-india.png";
import { useLanguage } from "/contexts/languageContext";

const AboutIndia = () => {
  const { language } = useLanguage();

  return (
    <section className="container">
      <h4 className="text-3xl font-bold mb-4">
        {language === "english" ? "About India" : "インドについて"}
      </h4>
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4 bg-neutral-200 dark:bg-neutral-800 py-2 px-4 rounded-2xl">
        <Image
          src={IndiaMapImage}
          width={500}
          height={400}
          alt="india in globe image"
          className="w-auto h-auto"
        ></Image>
        {language === "english" ? (
          <p className="text-sm">
            Welcome to India's enchanting paradise, Kerala, where nature's
            poetry unfolds in every corner. Nestled in the embrace of the
            Western Ghats, this coastal gem is a tapestry of lush landscapes and
            cultural richness. Glide through the serene backwaters of Alleppey
            on traditional houseboats, where palm-fringed canals whisper tales
            of tranquility. Discover the spice-scented hills of Munnar, a haven
            for tea plantations and mist-kissed vistas. Immerse yourself in the
            vibrant hues of Kathakali dance and rejuvenate with Ayurvedic
            traditions. Kerala's cuisine, steeped in coconut and spices, invites
            a gastronomic journey. From the tranquil beaches of Kovalam to the
            vibrant markets of Kochi, Kerala beckons with an immersive blend of
            nature, culture, and serenity. Your escape to this South Indian
            haven begins here.
          </p>
        ) : (
          <p>
            自然の詩があふれるインドの魅惑的な楽園、ケララ州へようこそ
            隅々まで展開します。西ガーツ山脈の懐に抱かれ、
            この海岸沿いの宝石は、緑豊かな風景と文化が織りなすタペストリーです。
            豊かさ。アレッピーの静かな僻地を滑空します。
            ヤシの木に囲まれた運河が物語をささやく伝統的なハウスボート。
            静けさ。スパイスの香りが漂うムンナールの丘を探索
            茶畑と霧のかかる景色。に浸ってください。
            カタカリの鮮やかな色彩がアーユルヴェーダで踊り、若返る
            伝統。ココナッツとスパイスをたっぷりと漬け込んだケーララ料理は、
            美食の旅。コバラムの静かなビーチから
            ケーララ州コーチの活気に満ちた市場は、さまざまな魅力が融合した魅力的な街です。
            自然、文化、そして静けさ。この南インドの安息の地への逃避行
            ここから始まります。
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutIndia;
