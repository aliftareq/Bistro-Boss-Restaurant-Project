import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();

  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (id) => {
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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "The Item has been deleted.",
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
        subHeading="Hurry Up!"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
      {/* data table  */}
      <div className="bg-white p-8">
        <div className="flex justify-evenly items-center mb-6">
          <h2 className="text-2xl font-semibold uppercase font-cinzel">
            Total Items: {menu.length}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-t-lg border">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-center text-white uppercase">
              <tr>
                <th>SL No.</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {menu.map((item, idx) => (
                <tr key={item._id} className="text-center">
                  <th>{idx + 1}</th>
                  <td className="flex justify-center items-center">
                    <img
                      className="w-16 h-16 rounded-xl"
                      src={item?.image}
                      alt="item"
                    />
                  </td>
                  <td>
                    <span>{item?.name}</span>
                  </td>
                  <td>
                    <span>${item?.price}</span>
                  </td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn bg-[#D1A054] text-white">
                        <FiEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="btn bg-[#B91C1C] text-white"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
