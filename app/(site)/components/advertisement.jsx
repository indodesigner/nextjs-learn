import Link from "next/link";
import Image from "next/image";
import { getAds } from "/sanity/sanity-utils";
import { RichTextComponents } from "/utils/RichTextComponents";
import { PortableText } from "@portabletext/react";

const Advertisement = async ({ language }) => {
  const ads = await getAds();
  return (
    <div>
      {ads &&
        ads.map((ad) => (
          <>
            <Link
              href={ad.href}
              target="_blank"
              title={ad.href}
              className="md:relative "
            >
              <div className="bg-neutral-100 dark:bg-neutral-700 bg-opacity-30 dark:bg-opacity-30 dark:border-[1px] dark:border-neutral-400 dark:border-opacity-20 shadow-lg rounded-2xl my-3 p-2">
                <span className="hidden md:block bg-neutral-800 text-white opacity-50 backdrop-blur-xl md:absolute md:top-3 md:right-3 px-3 py-1 rounded-md text-xs font-semibold">
                  Ad
                </span>
                <div className="px-2 group md:absolute md:inset-0 md:bg-transparent md:hover:bg-black/50 rounded-md z-9 transition duration-300 flex justify-center items-center mb-4 md:mb-0">
                  <div className="md:hidden md:group-hover:flex group-hover:flex-col md:text-center justify-center items-center md:px-8 transition duration-300 md:text-white">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-lg sm:text-3xl">
                        {ad.adName}
                      </h1>
                      <span className="md:hidden block bg-neutral-300 dark:bg-neutral-700 opacity-50 backdrop-blur-xl px-3 rounded-sm text-xs font-semibold">
                        Ad
                      </span>
                    </div>

                    <p className="text-xs sm:text-base">
                      <PortableText
                        value={
                          language === "english"
                            ? ad.content
                            : ad.contentjp || place.content
                        }
                        components={RichTextComponents}
                      />
                    </p>
                  </div>
                </div>

                {ad.adImages ? (
                  <Image
                    src={ad.adImages[0].asset.url}
                    width={1920}
                    height={720}
                    alt={ad.adImages[0].alt}
                    className="object-cover rounded-md"
                  ></Image>
                ) : (
                  <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                    <div>
                      <LuImageOff className="w-16 aspect-video text-neutral-300 dark:text-neutral-500" />
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </>
        ))}
    </div>
  );
};

export default Advertisement;
