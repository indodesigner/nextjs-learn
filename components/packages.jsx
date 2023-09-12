import Image from "next/image";
import Link from "next/link";
import urlFor from "./urlFor";
import { LuImageOff } from "react-icons/lu";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";

export default async function PackagesSection({ packages }) {
  return (
    <div>
      <div className="flex justify-between mt-8 mb-2">
        <h2 className="text-xl sm:text-4xl font-bold">Packages</h2>
        <Link
          href="/blogs"
          className="group font-medium link-hover flex items-center"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {packages &&
          packages.map((tourPackage) => (
            <Link
              id={tourPackage._id}
              href={`/packages/${tourPackage.slug}`}
              className="group card card-hover p-2"
            >
              {tourPackage.packageImages ? (
                <Image
                  src={urlFor(tourPackage.packageImages).url()}
                  width={800}
                  height={500}
                  alt={`${tourPackage.slug}-image`}
                  className="object-cover h-32 md:h-32 rounded-md"
                ></Image>
              ) : (
                // else part for no blog image
                <div className="grid place-items-center border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 rounded-md">
                  <div>
                    <LuImageOff className="w-16 h-32 md:h-32 text-neutral-500" />
                  </div>
                </div>
              )}

              <h6 className="text-sm sm:text-md md:text-xl lg:text-2xl font-bold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
                {tourPackage.packageName}
              </h6>

              {/* rich text component with line clamped to 2 lines */}
              <div className="text-sm line-clamp-2 md:line-clamp-3">
                <PortableText
                  value={tourPackage.content}
                  components={RichTextComponents}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
