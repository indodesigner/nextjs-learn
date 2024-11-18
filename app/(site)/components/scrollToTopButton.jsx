// Old - no smoothscroll------------------------

// "use client";

// import { useEffect, useState } from "react";
// import { ChevronUp } from "lucide-react";

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       // if the user scrolls down, show the button
//       window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
//     };
//     // listen for scroll events
//     window.addEventListener("scroll", toggleVisibility);

//     // clear the listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   // handles the animation when scrolling to the top
//   const scrollToTop = () => {
//     isVisible &&
//       window.scrollTo({
//         top: 0,
//         behavior: "auto",
//       });
//   };

//   return (
//     <button
//       className={`fixed bottom-12 sm:bottom-16 right-4 rounded-full p-2 outline-none transition-opacity duration-200 bg-black dark:bg-neutral-50 text-white dark:text-neutral-800 z-10 shadow-md ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//     >
//       <ChevronUp />
//     </button>
//   );
// };

// export default ScrollToTopButton;

// ---------New - go to top with smooth scroll - lenis-----------

"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useLenis } from "lenis/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis(); // Access Lenis instance

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    if (isVisible && lenis) {
      lenis.scrollTo(0, { duration: 1.5 }); // Use Lenis scrollTo
    }
  };

  return (
    <button
      className={`fixed bottom-12 sm:bottom-16 right-4 rounded-full p-2 outline-none transition-opacity duration-200 bg-black dark:bg-neutral-50 text-white dark:text-neutral-800 z-10 shadow-md ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollToTopButton;
