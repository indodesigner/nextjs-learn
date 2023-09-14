// import { getPlaces } from "/sanity/sanity-utils";
// import Link from "next/link";
// import Image from "next/image";
// import urlFor from "/components/urlFor";
// import { LuFrown, LuImageOff } from "react-icons/lu";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "/components/RichTextComponents";

// const TIMEOUT_DURATION = 5000;
// export default async function Places() {
//   const timeoutPromise = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Timeout: The operation took too long to complete."));
//     }, TIMEOUT_DURATION);
//   });

//   try {
//     const places = await Promise.race([getPlaces(), timeoutPromise]);

//     return (
//       <div className="container mt-0 md:mt-24">
//         <h1 className="text-4xl font-bold my-4">Destinations</h1>

//         <ul className="divide-y divide-neutral-500 divide-opacity-20">
//           {places &&
//             places.map((place) => (
//               // display blog items as list
//               <li className="group p-1" key={place._id}>
//                 <Link href={`places/${place.slug}`}>
//                   <div className="flex hover:bg-neutral-200 hover:dark:bg-neutral-600 hover:bg-opacity-30 hover:dark:bg-opacity-30 transition p-1 rounded-md">
//                     <div className="basis-2/5 sm:basis-1/5">
//                       {place.placeImages ? (
//                         <Image
//                           src={place.placeImages[0].asset.url}
//                           width={1080}
//                           height={480}
//                           className="mb-4 h-[400px] object-cover rounded-md"
//                           alt={`${place.slug}-image`}
//                         ></Image>
//                       ) : (
//                         <div className="flex justify-center my-8">
//                           <BsImageAlt className="w-16 h-16 text-white" />
//                         </div>
//                       )}
//                     </div>

//                     <div className="px-2 basis-3/5 sm:basis-4/5">
//                       <div className="line-clamp-2 text-xs mb-2">
//                         <PortableText
//                           value={place.content}
//                           components={RichTextComponents}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//         </ul>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching places:", error.message);
//     return (
//       <div className="mt-[20vh] text-center">
//         <span className="flex justify-center text-3xl">
//           <LuFrown />
//         </span>
//         <h1 className="text-lg font-bold">Error fetching data</h1>
//         <h5 className="text-sm">Please try again later</h5>
//         <Link href={"/"} className="text-sm link-hover underline">
//           Go back
//         </Link>
//       </div>
//     );
//   }
// }
