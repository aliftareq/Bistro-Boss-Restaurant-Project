import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa";

// 20201112, farhan md imran anjum, md abu hanif

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats, refetch } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stats`);
      return res.data;
    },
  });
  console.log(stats);
  return (
    <div>
      <h2 className="text-3xl mt-12">
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
            <div className="flex justify-center items-center w-64 h-32 md:w-56 md:h-28 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-lg text-white gap-4">
              <IoWalletSharp className="text-5xl" />
              <div>
                <h2 className="text-2xl font-bold">${stats?.revenue}</h2>
                <p>Revenue</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-64 h-32 md:w-56 md:h-28 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg text-white gap-4">
              <FaUsers className="text-5xl" />
              <div>
                <h2 className="text-2xl font-bold">
                  {String(stats?.user).padStart(2, "0")}
                </h2>
                <p>Customer</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-64 h-32 md:w-56 md:h-28 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg text-white gap-4">
              <GiCook className="text-5xl" />
              <div>
                <h2 className="text-2xl font-bold">
                  {String(stats?.menuItems).padStart(2, "0")}
                </h2>
                <p>MenuItems</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-64 h-32 md:w-56 md:h-28 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg text-white gap-4">
              <FaTruckMoving className="text-5xl" />
              <div>
                <h2 className="text-2xl font-bold">
                  {String(stats?.orders).padStart(2, "0")}
                </h2>
                <p>Orders</p>
              </div>
            </div>
          </div>
        </div>
        {/* charts */}
        <div></div>
      </section>
    </div>
  );
};

export default AdminHome;
