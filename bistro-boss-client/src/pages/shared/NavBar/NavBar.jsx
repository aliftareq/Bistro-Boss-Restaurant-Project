import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogout = () => {
    logOut().catch((error) => console.log(error));
  };

  // Active stays amber even without hover
  const navLinkClass = ({ isActive }) =>
    `
      relative px-3 py-2 rounded-lg text-sm font-medium tracking-wide
      transition-all duration-300
      ${
        isActive
          ? "!text-amber-300 bg-white/10"
          : "text-white/90 hover:text-amber-200 hover:bg-white/5"
      }
    `;

  const navOptions = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/menu" className={navLinkClass}>
          Our Menu
        </NavLink>
      </li>

      <li>
        <NavLink to="/order/salads" className={navLinkClass}>
          Our Shop
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact Us
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}
            className={navLinkClass}
          >
            Dashboard
          </NavLink>
        </li>
      )}

      <li>
        <NavLink to="/dashboard/cart" className={navLinkClass}>
          <span className="relative flex items-center gap-2">
            <BsCart4 className="text-lg" />

            <span className="hidden md:inline relative">
              Cart
              {/* Cart count at top-right corner of Cart */}
              <span
                className="absolute -top-2 -right-4
                           inline-flex items-center justify-center
                           min-w-[18px] h-[18px] px-1
                           text-[10px] font-semibold text-white
                           rounded-full
                           bg-gradient-to-r from-fuchsia-500 to-pink-500
                           shadow-md"
              >
                {cart?.length ?? 0}
              </span>
            </span>
          </span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Premium glass navbar */}
      <div
        className="mx-auto max-w-screen-xl
                   bg-black/35 backdrop-blur-md border border-white/10
                   shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      >
        <div className="navbar px-4 md:px-8">
          {/* LEFT */}
          <div className="navbar-start">
            {/* Mobile dropdown */}
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden text-white/90 hover:text-amber-200 hover:bg-white/5"
              >
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
                className="menu dropdown-content mt-3 w-56 p-2 rounded-2xl
                           bg-black/80 backdrop-blur-md border border-white/10
                           shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              >
                {navOptions}
              </ul>
            </div>

            {/* Brand */}
            <Link to="/" className="group flex flex-col leading-none">
              <span className="text-lg md:text-xl font-semibold tracking-[0.2em] text-white">
                BISTRO
              </span>
              <span className="text-xs md:text-sm tracking-[0.35em] text-white/70 group-hover:text-amber-200 transition-colors">
                BOSS
              </span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1">{navOptions}</ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-full text-sm font-semibold
                           bg-gradient-to-r from-amber-400 to-yellow-500 text-black
                           shadow-md hover:shadow-lg transition-all duration-300
                           hover:from-amber-500 hover:to-yellow-600
                           focus:outline-none focus:ring-2 focus:ring-amber-300/60"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 rounded-full text-sm font-semibold
                           bg-gradient-to-r from-amber-400 to-yellow-500 text-black
                           shadow-md hover:shadow-lg transition-all duration-300
                           hover:from-amber-500 hover:to-yellow-600
                           focus:outline-none focus:ring-2 focus:ring-amber-300/60"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-[72px]" />
    </div>
  );
};

export default NavBar;

