import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdAccessTimeFilled, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Reservation = () => {
  return (
    <div>
      {/* table book form  */}
      <section>
        <SectionTitle
          subHeading="Reservation"
          heading="BOOK A TABLE"
        ></SectionTitle>
        <form className="mx-12 md:mx-16 mb-20 p-8 md:p-10">
          {/* 1st row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Date*</span>
              </label>
              <input
                type="date"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Time*</span>
              </label>
              <input
                type="Time"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Guest*</span>
              </label>
              <input
                type="number"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Phone*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-5">
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
              <div className="bg-base-200 mx-3 mb-3 text-center px-4 pt-6 pb-14">
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
              <div className="bg-base-200 mx-3 mb-3 text-center px-4 pt-6 pb-14">
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
              <div className="bg-base-200 mx-3 mb-3 text-center px-4 pt-6 pb-14">
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
