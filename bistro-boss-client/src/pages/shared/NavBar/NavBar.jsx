import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link className="hover:text-yellow-300" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-300" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-300" to="/order/salads">
          Our Shop
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-300" to="/contact">
          Contact Us
        </Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link className="hover:text-yellow-300" to="/dashboard/adminHome">
            Dashboard
          </Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link className="hover:text-yellow-300" to="/dashboard/userHome">
            Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link className="hover:text-yellow-300" to="/dashboard/cart">
          <BsCart4 className="text-xl" />
          <div className="badge badge-secondary">+{cart?.length}</div>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            BISTRO | BOSS
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogout} className="btn">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link className="btn" to="/login">
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
