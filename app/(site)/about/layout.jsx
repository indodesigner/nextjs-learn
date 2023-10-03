import GetCountry from "@/components/getCountry";

const Aboutlayout = ({ children }) => {
  return (
    <div>
      {children}
      <GetCountry country={null} />
    </div>
  );
};

export default Aboutlayout;
