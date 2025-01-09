import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  const { user, deleteUserProfile } = useContext(AuthContext);
  console.log(user);

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        subHeading="How many???"
        heading="MANAGE ALL USERS"
      ></SectionTitle>
      <div className="bg-white p-8">
        <div className="flex justify-evenly items-center mb-6">
          <h2 className="text-2xl font-semibold uppercase">
            Total Users: {users?.length}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-t-lg border">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-center text-white uppercase">
              <tr>
                <th>SL No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {users.map((user, idx) => (
                <tr key={user._id} className="text-center">
                  <th>{idx + 1}</th>
                  <td>
                    <span>{user.name}</span>
                  </td>
                  <td>
                    <span>{user?.email}</span>
                  </td>
                  <td>{user?.role || "user"}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id, user.uid)}
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
        ;
      </div>
    </div>
  );
};

export default AllUsers;
