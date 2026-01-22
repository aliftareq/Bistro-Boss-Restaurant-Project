import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("sign-up");
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
