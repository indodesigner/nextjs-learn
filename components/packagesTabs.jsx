import Image from "next/image";
import Link from "next/link";
import urlFor from "/components/urlFor";
import { LuImageOff } from "react-icons/lu";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "/components/RichTextComponents";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";

export default async function PackagesTabs({ packages, heading }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{heading} Packages</CardTitle>
          {heading == "All" ? (
            <CardDescription>
              {heading} tour packages are listes below
            </CardDescription>
          ) : (
            <CardDescription>
              All the {heading} tour packages are listes below
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {packages &&
              packages.map((pack) => (
                <Link
                  key={pack._id}
                  href={`/packages/${pack.slug}`}
                  className="group card card-hover p-2"
                >
                  {pack.packageImages ? (
                    <Image
                      src={urlFor(pack.packageImages).url()}
                      width={800}
                      height={500}
                      alt={pack.alt}
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

                  <h6 className="px-2 text-sm sm:text-md md:text-lg lg:text-xl font-bold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
                    {pack.packageName}
                  </h6>

                  {/* rich text component with line clamped to 3 lines */}
                  {/* <div className="text-sm line-clamp-2 md:line-clamp-3">
                    <PortableText
                      value={pack.content}
                      components={RichTextComponents}
                    />
                  </div> */}

                  {pack.duration ? (
                    <div className="grid grid-cols-2 px-2 mb-2 text-sm end">
                      <span className="bg-neutral-200 dark:bg-neutral-800 rounded-md py-[2px]">
                        <h6 className="font-semibold grid justify-items-center text-center content-center">
                          {pack.duration} Days
                        </h6>
                      </span>

                      <h6 className="text-xs grid justify-items-end content-center">
                        ₹{pack.rate}
                      </h6>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 px-2 mb-2 text-sm end">
                      <span className="bg-neutral-200 dark:bg-neutral-800 rounded-md py-[2px] px-1">
                        <h6 className="text-xs grid justify-items-center content-center text-center">
                          Custom duration
                        </h6>
                      </span>
                      <h6 className="grid justify-items-end content-center">
                        Custom rate
                      </h6>
                    </div>
                  )}
                </Link>
              ))}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
