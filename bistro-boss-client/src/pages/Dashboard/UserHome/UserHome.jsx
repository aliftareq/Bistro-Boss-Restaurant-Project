import useAuth from "../../../Hooks/useAuth";
import { IoWalletSharp } from "react-icons/io5";
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FaCalendarAlt, FaStar } from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h2 className="text-3xl mt-12 font-cinzel">
        <span>Hi! Welcome </span>
        {user?.displayName ? (
          <span className="font-bold">{user.displayName}</span>
        ) : (
          "Back"
        )}
      </h2>
      <section>
        {/* cards */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row gap-4 my-6 overflow-hidden">
            <div className="flex justify-center items-center w-64 h-32 md:w-72 md:h-32 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-lg text-white gap-4">
              <IoWalletSharp className="text-5xl" />
              <div>
                <h2 className="text-2xl font-bold">$205.75</h2>
                <p>Cash</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-64 h-32 md:w-72 md:h-32 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg text-white gap-4">
              <FaShop className="text-5xl" />
              <div>
                <h2 className="text-2xl font-bold">
                  {String(200).padStart(2, "0")}
                </h2>
                <p>Orders</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-64 h-32 md:w-72 md:h-32 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg text-white gap-4">
              <MdCall className="text-5xl" />
              <div>
                <h2 className="text-2xl font-bold">
                  {String(3).padStart(2, "0")}
                </h2>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
        {/* profile & activities */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#FFEDD5] flex flex-col justify-center items-center md:w-1/2 p-5 md:p-0">
            <img
              className="w-36 rounded-full border-2 border-[#D1A054] p-4 bg-white"
              src={user?.photoURL}
              alt="userPhoto"
            />
            <p className="text-xl font-semibold font-cinzel mt-4">
              {user.displayName}
            </p>
          </div>
          <div className="bg-[#FEF9C3] md:w-1/2 md:border-l-2 md:border-orange-300 uppercase p-10">
            <h2 className="text-4xl font-semibold font-cinzel">
              Your Activities
            </h2>
            <div className="my-4 text-lg uppercase font-cinzel">
              <p className="flex gap-1 text-[#0088FE] items-center">
                <FaCartShopping />
                Orders : 6
              </p>
              <p className="flex gap-1 text-[#00C4A1] items-center">
                <FaStar />
                Reviews : 2
              </p>
              <p className="flex gap-1 text-[#FFBB28] items-center">
                <FaCalendarAlt />
                Bookings : 1
              </p>
              <p className="flex gap-1 text-[#FF8042] items-center">
                <IoWalletSharp />
                Payments : 3
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserHome;
