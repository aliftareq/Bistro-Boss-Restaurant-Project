import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useBookings from "../../../Hooks/useBookings";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaRegTrashAlt } from "react-icons/fa";

const ManageBookings = () => {
  const [bookings, refetch] = useBookings();
  //console.log(bookings);
  const axiosSecure = useAxiosSecure();

  const handleApprove = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You are willing to approve this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/bookings/${id}`).then((res) => {
          if (res.data.modifiedCount  > 0) {
            Swal.fire({
              title: "Confirmed!",
              text: "Your Reservation has been Confirmed.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

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
        subHeading="At a glance"
        heading="MANAGE ALL BOOKING"
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
                <th>Name</th>
                <th>Phone_no</th>
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
                  <th>{item?.name}</th>
                  <td>
                    <span>{item?.phone}</span>
                  </td>
                  <td>
                    <span>{item?.numberOfguest}</span>
                  </td>
                  <td>{item?.date}</td>
                  <td>{item?.time}</td>
                  <td>
                    {item?.status == "Pending" ? (
                      <button
                        onClick={() => handleApprove(item._id)}
                        className="btn btn-link text-yellow-500"
                      >
                        Approve
                      </button>
                    ) : (
                      <p className="text-green-600 font-semibold">Confirmed</p>
                    )}
                  </td>
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

export default ManageBookings;
