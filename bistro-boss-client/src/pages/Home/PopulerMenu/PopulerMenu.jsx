import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  return (
    <section className="mb-16">
      <SectionTitle subHeading="Populer Items" heading="From our Menu" />

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        {/* Consistent with Log In / Log Out button style */}
        <Link
          to="/menu"
          className="px-8 py-3 rounded-full text-sm font-semibold
                     bg-gradient-to-r from-amber-400 to-yellow-500
                     text-black shadow-md
                     hover:from-amber-500 hover:to-yellow-600
                     hover:shadow-lg transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-amber-300/60"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default PopulerMenu;
