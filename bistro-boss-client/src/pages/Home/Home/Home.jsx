import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import BistroBoss from "../BistroBoss/BistroBoss";
import Contact from "../Contact/contact";

const Home = () => {
  return (
    <div>
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
      <Testimonials />
    </div>
  );
};

export default Home;
