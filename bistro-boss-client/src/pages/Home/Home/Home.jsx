import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import BistroBoss from "../BistroBoss/BistroBoss";
import Contact from "../Contact/contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>BISTRO | Home</title>
      </Helmet>
      <Banner />
      <div className="mx-20">
        <Category />
      </div>
      <BistroBoss />
      <div className="mx-20">
        <PopulerMenu />
        <Contact />
      </div>
      <Featured />
      <div className="mx-5 md:mx-20">
        <Testimonials />
      </div>
    </section>
  );
};

export default Home;
