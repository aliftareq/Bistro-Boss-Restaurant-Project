import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  const handleAddToCart = (food) => {
    console.log(food);
  };

  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4 py-2">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 border-orange-500 mt-4 uppercase"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
