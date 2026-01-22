import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdAccessTimeFilled, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Reservation = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    //now send the menu item data to the server with image
    const BookingInfo = {
      name: user?.displayName,
      phone: data.phone,
      email: user?.email,
      numberOfguest: parseInt(data.guestNumber),
      date: data.date,
      time: data.time,
      status: "Pending",
    };
    //console.log(BookingInfo);
    const BookingRes = await axiosSecure.post("/bookings", BookingInfo);
    console.log(BookingRes.data);
    if (BookingRes.data.insertedId) {
      //show success popup
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Reservation have been booked successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

  return (
    <div>
      {/* table book form  */}
      <section>
        <SectionTitle
          subHeading="Reservation"
          heading="BOOK A TABLE"
        ></SectionTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-2 md:mx-16 mb-20 p-8 md:p-10"
        >
          {/* 1st row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Date*</span>
              </label>
              <input
                type="date"
                placeholder="Enter the Date"
                className="input input-bordered bg-white"
                {...register("date", { required: true })}
              />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Time*</span>
              </label>
              <input
                type="Time"
                placeholder="Enter the Time"
                className="input input-bordered bg-white"
                {...register("time", { required: true })}
              />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Guest*</span>
              </label>
              <input
                type="number"
                placeholder="Enter the number"
                className="input input-bordered bg-white"
                {...register("guestNumber", { required: true })}
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={user?.displayName}
                className="input input-bordered bg-white"
                readOnly
              />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Phone*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone No."
                className="input input-bordered bg-white"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={user?.email}
                className="input input-bordered bg-white"
                readOnly
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <input
              className="btn w-1/2 mx-auto uppercase text-white bg-gradient-to-l from-[#B58130] to-[#835D23] hover:opacity-90"
              type="submit"
              value="Book"
            />
          </div>
        </form>
      </section>
      {/* location section  */}
      <section>
        <SectionTitle
          subHeading="---Visit Us---"
          heading="OUR LOCATION"
        ></SectionTitle>
        <div className="grid lg:grid-cols-3 gap-4 mx-12 md:mx-32 mb-8">
          <div>
            <div className="bg-[#D1A054] text-white flex justify-center items-center py-4">
              <MdOutlinePhoneInTalk className="text-2xl stroke-[0.5]" />
            </div>
            <div className="bg-white border border-slate-200">
              <div className="bg-white mx-3 mb-3 text-center px-4 pt-6 pb-14">
                <p className="font-semibold uppercase">Phone</p>
                <p>+38 (012) 34 56 788</p>
                <p>+38 (012) 34 56 789</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#D1A054] text-white flex justify-center items-center py-4">
              <FaLocationDot className="text-2xl stroke-[0.5]" />
            </div>
            <div className="bg-white border border-slate-200">
              <div className="bg-white mx-3 mb-3 text-center px-4 pt-6 pb-14">
                <p className="font-semibold uppercase">ADDRESS</p>
                <p>123 ABS Street, Uni 21, Bangladesh</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#D1A054] text-white flex justify-center items-center py-4">
              <MdAccessTimeFilled className="text-2xl stroke-[0.5]" />
            </div>
            <div className="bg-white border border-slate-200">
              <div className="bg-white mx-3 mb-3 text-center px-4 pt-6 pb-14">
                <p className="font-semibold uppercase">WORKING HOURS</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
