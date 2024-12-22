import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading="Populer Items"
        heading="From our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View full Menu!
        </button>
      </div>
    </section>
  );
};

export default PopulerMenu;
