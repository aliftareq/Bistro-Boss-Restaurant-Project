import {
  FaBook,
  FaCalendarAlt,
  FaCreditCard,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { MdEmail, MdRateReview } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImSpoonKnife } from "react-icons/im";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // To do : get admin data from database;
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard sidebar  */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu font-semibold uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <ImSpoonKnife /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <FaCreditCard /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart /> My Cart ({cart?.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdRateReview /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaList /> My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div class="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <RxHamburgerMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">
              <GiShoppingBag /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdEmail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="bg-base-200 flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
