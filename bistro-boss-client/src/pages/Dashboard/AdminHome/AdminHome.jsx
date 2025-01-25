import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

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
    </div>
  );
};

export default AdminHome;
