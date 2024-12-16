import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="w-full flex text-white text-center">
        <div className="w-1/2 flex flex-col justify-center items-center bg-slate-800 p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-2">CONTACT US</h3>
          <div className="text-sm md:text-lgflex flex-col justify-center items-center">
            <p>123 ABS Street, Uni 21, Bangladesh.</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center bg-slate-900 p-4">
          <h6 className="text-sm md:text-lg font-semibold mb-2">Follow US</h6>
          <p>Join us on social media</p>
          <div className="grid grid-flow-col gap-4 mt-2">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bistro-Boss-limited.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
