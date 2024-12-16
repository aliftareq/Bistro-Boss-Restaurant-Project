import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import BistroBoss from "../BistroBoss/BistroBoss";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BistroBoss />
      <PopulerMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
