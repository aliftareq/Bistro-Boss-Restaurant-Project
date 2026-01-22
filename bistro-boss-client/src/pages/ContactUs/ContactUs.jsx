import { Helmet } from "react-helmet-async";
import Banner from "../../assets/contact/banner.jpg";
import Cover from "../shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO | CONTACT </title>
      </Helmet>
      <Cover
        img={Banner}
        title="Contact Us"
        text="Would you like to try a dish?"
      ></Cover>
      {/* location section  */}
      <div>
        <SectionTitle
          subHeading="---Visit Us---"
          heading="OUR LOCATION"
        ></SectionTitle>
        <div className="grid lg:grid-cols-3 gap-8 mx-12 md:mx-32 mb-8">
          <div>
            <div className="bg-[#D1A054] text-white flex justify-center items-center py-4">
              <MdOutlinePhoneInTalk className="text-2xl stroke-[0.5]" />
            </div>
            <div className="bg-white border border-slate-200">
              <div className="bg-white mx-3 mb-3 text-center px-14 pt-6 pb-14">
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
              <div className="bg-white mx-3 mb-3 text-center px-14 pt-6 pb-14">
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
              <div className="bg-white mx-3 mb-3 text-center px-14 pt-6 pb-14">
                <p className="font-semibold uppercase">WORKING HOURS</p>
                <p>Mon - Fri: 08:00 - 22:00 Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact form  */}
      <div>
        <SectionTitle
          subHeading="Send Us a Message"
          heading="CONTACT FORM"
        ></SectionTitle>
        <form className="bg-white mx-12 md:mx-32 mb-20 p-8 md:p-10">
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered bg-white"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Phone*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Message*</span>
            </label>
            <textarea
              placeholder="Write Your message here"
              className="textarea textarea-bordered h-32 bg-white"
              required
            ></textarea>
          </div>
          <div className="flex justify-center items-center my-5">
            <input
              className="btn text-white bg-gradient-to-l from-[#B58130] to-[#835D23] hover:opacity-90"
              type="submit"
              value="Send Message ➤"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
