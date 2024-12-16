import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center px-8 py-12 xl:px-36 xl:py-20 pt-12 space-y-4">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2024</p>
          <p className="uppercase font-bold">Where Can i get some?</p>
          <p>
            Savor the perfect blend of flavor and freshness with our delicious
            creations. From hearty meals to delightful treats, each dish is
            crafted with care, using the finest ingredients to bring joy to
            every bite.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
