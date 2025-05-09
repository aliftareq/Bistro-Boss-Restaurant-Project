import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    //send cart item to DB
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "item added to your cart",
            showConfirmButton: false,
            timer: 1500,
          });
          //refetch the page
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure
        style={{
          width: "300px",
          height: "300px",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "0 auto",
        }}
      >
        <img
          src={image}
          alt="image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4 py-2">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
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
