import React from "react";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="">
      <SectionTitle
        subHeading="My Cart"
        heading="WANNA ADD MORE?"
      ></SectionTitle>
      {/* cart added items in table */}
      <div className="bg-white p-8">
        <div className="md:flex space-y-4 md:space-y-0 justify-evenly items-center mb-6 font-cinzel">
          <h2 className="text-lg md:text-2xl font-semibold uppercase">
            Total Orders: {cart?.length}
          </h2>
          <h2 className="text-lg md:text-2xl font-semibold uppercase">
            Total Price: ${totalPrice}
          </h2>

          {cart.length === 0 ? (
            <button disabled={true} className="btn text-white mt-5 md:mt-0">
              Pay
            </button>
          ) : (
            <Link to="/dashboard/payment">
              <button className="btn bg-[#D1A054] text-white mt-5 md:mt-0">
                Pay
              </button>
            </Link>
          )}
        </div>
        <div className="overflow-x-auto rounded-t-lg border">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-center text-white uppercase">
              <tr>
                <th>SL No.</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {cart.map((item, idx) => (
                <tr key={item._id} className="text-center">
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex justify-center items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                          <img src={item?.image} alt={item?.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{item?.name}</span>
                  </td>
                  <td>${item?.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-[#B91C1C] text-white"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
