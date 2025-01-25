import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stats`);
      return res.data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order-stats`);
      return res.data;
    },
  });

  //custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //custom shape for pie charts
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

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
        <div className="flex flex-col md:flex-row items-center overflow-hidden bg-white rounded-sm px-5 py-5">
          <div className="md:w-1/2">
            <BarChart
              width={400}
              height={250}
              data={chartData}
              margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="md:w-1/2">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
