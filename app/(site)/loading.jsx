// "use client";
// import { useState, useRef } from "react";
// import Logo from "/public/images/logo.png";
// import Image from "next/image";
// import Link from "next/link";

// const Loading = () => {
//   const [buttonEnable, setButtonEnable] = useState(false);
//   const myTimeout = setTimeout(() => setButtonEnable(true), 5000);
//   return (
//     <div className="absolute flex justify-center items-center flex-col gap-8 top-0 left-0 bg-white dark:bg-neutral-900 w-full h-full z-[100]">
//       <Image
//         src={Logo}
//         width={80}
//         height={48}
//         alt="logo image"
//         className={`${buttonEnable === true ? "block" : "absolute"}`}
//       />
//       {buttonEnable === false ? (
//         <div role="status" className="relative">
//           <svg
//             aria-hidden="true"
//             class="w-28 h-28 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
//             viewBox="0 0 100 101"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//               fill="currentColor"
//             />
//             <path
//               d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//               fill="currentFill"
//             />
//           </svg>
//         </div>
//       ) : null}

//       {buttonEnable === true ? (
//         <div
//           className="flex flex-col gap-4 justify-center items-center"
//           ref={myTimeout}
//         >
//           <span>
//             Connection error! <strong>Please wait or reload the page</strong>
//           </span>
//           <div>
//             <Link
//               href="/"
//               className="bg-black dark:bg-neutral-50 px-4 py-2 text-white dark:text-neutral-800 rounded-md"
//               onClick={() => {
//                 window.location.reload();
//               }}
//             >
//               Reload
//             </Link>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default Loading;

"use client";
import { useState, useEffect } from "react";
import Logo from "/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Loading = () => {
  const [buttonEnable, setButtonEnable] = useState(false);

  useEffect(() => {
    const myTimeout = setTimeout(() => setButtonEnable(true), 5000);
    return () => clearTimeout(myTimeout); // Clear timeout on component unmount
  }, []);

  return (
    <div className="absolute flex justify-center items-center flex-col gap-8 top-0 left-0 bg-white dark:bg-neutral-900 w-full h-full z-[100]">
      <Image
        src={Logo}
        width={80}
        height={48}
        alt="logo image"
        className={buttonEnable ? "block" : "absolute"}
      />
      {!buttonEnable ? (
        <div role="status" className="relative">
          <svg
            aria-hidden="true"
            className="w-28 h-28 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center">
          <span>
            Connection error! <strong>Please wait or reload the page</strong>
          </span>
          <div>
            <Link
              href="/"
              className="bg-black dark:bg-neutral-50 px-4 py-2 text-white dark:text-neutral-800 rounded-md"
              onClick={() => window.location.reload()}
            >
              Reload
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
