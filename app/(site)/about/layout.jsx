import GetCountry from "@/components/getCountry";

export const metadata = {
  title: "Niko Travels",
  description: "Explore with Niko Travels - About",
};

const Aboutlayout = ({ children }) => {
  return (
    <div>
      {children}
      <GetCountry country={null} />
    </div>
  );
};

export default Aboutlayout;
