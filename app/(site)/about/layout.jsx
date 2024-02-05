import GetCountry from "@/components/getCountry";
import Advertisement from "@/components/advertisement";

export const metadata = {
  title:
    "About Us - Your Gateway to Unforgettable Journeys in Japan and India | Explore the Best Places & Exclusive Tour Packages with Niko Travels",
  description:
    "Welcome to Niko Travels, your trusted travel companion in exploring the best of Japan and India. Uncover enchanting destinations, cultural gems, and hidden wonders with our expertly curated guides. Elevate your travel experience with our exclusive tour packages, ensuring unforgettable adventures tailored just for you. Discover the world with confidence – travel with Niko.",
};

const Aboutlayout = ({ children }) => {
  return (
    <div>
      {children}

      <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mt-2" />

      <div className="container">
        <Advertisement />
      </div>
      <GetCountry country={null} />
    </div>
  );
};

export default Aboutlayout;
