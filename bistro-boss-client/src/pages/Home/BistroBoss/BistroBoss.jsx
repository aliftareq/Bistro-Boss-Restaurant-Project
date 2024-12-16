import React from "react";
import "./BistroBoss.css";

const BistroBoss = () => {
  return (
    <section className="Bistro-item bg-fixed text-white px-10 py-16 xl:px-20 xl:py-32 my-20">
      <div className="bg-white text-black px-8 py-12 xl:px-24 xl:py-32 flex flex-col justify-center items-center space-y-4">
        <h3 className="text-lg xl:text-3xl uppercase font-bold italic">
          Bistro-Boss
        </h3>
        <p className="text-center">
          Bistro-Boss is a premier chef service offering an exceptional dining
          experience with creative and flavorful dishes. Combining culinary
          artistry with fresh, high-quality ingredients, Bistro-Boss specializes
          in crafting meals that delight every palate. Whether for intimate
          gatherings or grand celebrations, Bistro-Boss ensures every meal is a
          masterpiece of taste and presentation.
        </p>
      </div>
    </section>
  );
};

export default BistroBoss;
