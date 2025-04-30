import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useBookings from "../../../Hooks/useBookings";
import React from "react";
import Swal from "sweetalert2";

const MyBookings = () => {
  const [bookings, refetch] = useBookings();
  console.log(bookings);
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
        axiosSecure.delete(`/bookings/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Reservation has been deleted.",
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
        subHeading="My Bookings"
        heading="WANNA Book MORE?"
      ></SectionTitle>
      {/* Booking added items in table */}
      <div className="bg-white p-8">
        <div className="md:flex space-y-4 md:space-y-0 justify-evenly items-center mb-6 font-cinzel">
          <h2 className="text-lg md:text-2xl font-semibold uppercase">
            Total Bookings : {bookings?.length}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-t-lg border">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-center text-white uppercase">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Number of guest</th>
                <th>Date(yyyy-mm-dd)</th>
                <th>Time</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {bookings.map((item, idx) => (
                <tr key={item._id} className="text-center">
                  <th>{idx + 1}</th>
                  <td>
                    <span>{item?.name}</span>
                  </td>
                  <td>
                    <span>{item?.numberOfguest}</span>
                  </td>
                  <td>{item?.date}</td>
                  <td>{item?.time}</td>
                  <td>{item?.status}</td>
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

export default MyBookings;
