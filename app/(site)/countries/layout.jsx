import BlogSection from "/components/blogs";

const Countrieslayout = ({ children }) => {
  return (
    <div>
      {children}
      <section className="container">
        <BlogSection />
      </section>
    </div>
  );
};

export default Countrieslayout;
