import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="flex justify-center items-end">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-4">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
