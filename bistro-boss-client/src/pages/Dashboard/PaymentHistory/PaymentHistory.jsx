import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <SectionTitle
        subHeading="At a Glance!"
        heading="PAYMENT HISTORY"
      ></SectionTitle>
      {/* payment history in table */}
      <div className="bg-white p-8">
        <div className="flex justify-evenly items-center mb-6">
          <h2 className="text-2xl font-semibold uppercase font-cinzel">
            Total payments: {payments?.length}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-t-lg border">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-center text-white uppercase">
              <tr>
                <th>Email</th>
                <th>Category</th>
                <th>Total Price</th>
                <th>Pyament Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {payments.map((item, idx) => (
                <tr key={item._id} className="text-center">
                  <td>{item.email}</td>
                  <td>
                    <span>Food Order</span>
                  </td>
                  <td>${item?.price}</td>
                  <td>{item?.date}</td>
                  <td className="uppercase text-green-400 font-semibold">
                    {item?.status}
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

export default PaymentHistory;
