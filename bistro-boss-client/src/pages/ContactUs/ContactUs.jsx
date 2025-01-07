import { Helmet } from "react-helmet-async";
import Banner from "../../assets/contact/banner.jpg";
import Cover from "../shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO | </title>
      </Helmet>
      <Cover
        img={Banner}
        title="Contact Us"
        text="Would you like to try a dish?"
      ></Cover>
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
              <div className="bg-gray-100 mx-3 mb-3 text-center px-14 pt-6 pb-14">
                <p className="font-semibold uppercase">Phone</p>
                <p>+38 (012) 34 56 789</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#D1A054] text-white flex justify-center items-center py-4">
              <MdOutlinePhoneInTalk className="text-2xl stroke-[0.5]" />
            </div>
            <div className="bg-white border border-slate-200">
              <div className="bg-gray-100 mx-3 mb-3 text-center px-14 pt-6 pb-14">
                <p className="font-semibold uppercase">Phone</p>
                <p>+38 (012) 34 56 789</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#D1A054] text-white flex justify-center items-center py-4">
              <MdOutlinePhoneInTalk className="text-2xl stroke-[0.5]" />
            </div>
            <div className="bg-white border border-slate-200">
              <div className="bg-gray-100 mx-3 mb-3 text-center px-14 pt-6 pb-14">
                <p className="font-semibold uppercase">Phone</p>
                <p>+38 (012) 34 56 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
