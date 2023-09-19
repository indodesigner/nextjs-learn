import Image from "next/image";
import Link from "next/link";
import urlFor from "/components/urlFor";
import { LuImageOff } from "react-icons/lu";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "/components/RichTextComponents";

export default async function PackagesTabs({ packageTab }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {packageTab &&
        packageTab.map((pack) => (
          <Link
            id={pack._id}
            href={`/packages/${pack.slug}`}
            className="group card card-hover p-2"
          >
            {pack.packageImages ? (
              <Image
                src={urlFor(pack.packageImages).url()}
                width={800}
                height={500}
                alt={`${pack.slug}-image`}
                className="object-cover h-32 md:h-32 rounded-md"
              ></Image>
            ) : (
              // else part for no place image
              <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                <div>
                  <LuImageOff className="w-16 h-32 md:h-32 text-neutral-300 dark:text-neutral-500" />
                </div>
              </div>
            )}

            <h6 className="text-sm sm:text-md md:text-lg lg:text-xl font-bold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
              {pack.packageName}
            </h6>

            {/* rich text component with line clamped to 3 lines */}
            <div className="text-sm line-clamp-2 md:line-clamp-3">
              <PortableText
                value={pack.content}
                components={RichTextComponents}
              />
            </div>
          </Link>
        ))}
    </div>
  );
}
