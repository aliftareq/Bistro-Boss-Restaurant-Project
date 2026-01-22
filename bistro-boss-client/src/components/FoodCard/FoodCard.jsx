// import { useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useCart from "../../Hooks/useCart";

// const FoodCard = ({ item }) => {
//   const { name, image, price, recipe, _id } = item;
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const axiosSecure = useAxiosSecure();
//   const [, refetch] = useCart();

//   const handleAddToCart = () => {
//     //send cart item to DB
//     if (user && user?.email) {
//       const cartItem = {
//         menuId: _id,
//         email: user?.email,
//         name,
//         image,
//         price,
//       };
//       axiosSecure.post("/carts", cartItem).then((res) => {
//         console.log(res.data);
//         if (res.data.insertedId) {
//           Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "item added to your cart",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           //refetch the page
//           refetch();
//         }
//       });
//     } else {
//       Swal.fire({
//         title: "You are not Logged In",
//         text: "Please login to add to the cart",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, login!",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           //send the user to login page
//           navigate("/login", { state: { from: location } });
//         }
//       });
//     }
//   };

//   return (
//     <div className="card bg-base-100 w-80 shadow-xl">
//       <figure
//         style={{
//           width: "300px",
//           height: "300px",
//           overflow: "hidden",
//           borderRadius: "12px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           margin: "0 auto",
//         }}
//       >
//         <img
//           src={image}
//           alt="image"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </figure>
//       <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4 py-2">
//         ${price}
//       </p>
//       <div className="card-body flex flex-col items-center">
//         <h2 className="card-title">{name}</h2>
//         <p>{recipe}</p>
//         <div className="card-actions justify-end">
//           <button
//             onClick={handleAddToCart}
//             className="btn btn-outline border-0 border-b-4 border-orange-500 mt-4 uppercase"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe = "", _id } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const [expanded, setExpanded] = useState(false);

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to your cart",
            showConfirmButton: false,
            timer: 1400,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Login Required",
        text: "Please login to add items to your cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const shouldShowToggle = recipe.length > 80;
  const displayRecipe =
    expanded || !shouldShowToggle ? recipe : `${recipe.slice(0, 50)}...`;

  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl
        bg-gradient-to-b from-white via-white to-amber-50/60
        border border-black/5
        shadow-[0_25px_80px_rgba(0,0,0,0.12)]
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.18)]
      "
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        {/* Price tag */}
        <div
          className="
            absolute top-4 right-4
            rounded-full px-5 py-2
            text-sm font-bold tracking-wide
            text-black
            bg-gradient-to-r from-amber-400 to-yellow-500
            shadow-lg
          "
        >
          ${Number(price).toFixed(2)}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-6 pb-7 text-center">
        {/* Title */}
        <h3
          className="
            text-xl font-extrabold
            tracking-wide uppercase
            text-[#1f2937]
            group-hover:text-amber-600
            transition-colors duration-300
          "
        >
          {name}
        </h3>

        {/* Divider */}
        <div className="mx-auto my-3 h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* Description + Read more */}
        <div className="mt-2 px-2 text-center">
          <p className="text-sm leading-relaxed text-gray-600">{displayRecipe}</p>

          {shouldShowToggle && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="
                mt-1 text-xs font-semibold
                text-amber-600 hover:text-amber-700
                transition-colors duration-200
                focus:outline-none
              "
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleAddToCart}
            className="
              relative bg-transparent border-0
              uppercase tracking-wider font-semibold
              text-gray-800
              transition-colors duration-300
              hover:text-amber-600
              focus:outline-none
              group/btn
            "
          >
            Add to Cart

            {/* underline */}
            <span
              className="
                pointer-events-none
                absolute left-1/2 -bottom-2
                h-[3px] w-24
                -translate-x-1/2
                rounded-full
                bg-gray-300
                transition-all duration-300
                group-hover/btn:bg-gradient-to-r
                group-hover/btn:from-amber-400
                group-hover/btn:to-amber-600
                group-hover/btn:w-28
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
