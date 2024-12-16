import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopulerMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerItems = data.filter((item) => item.category === "popular");
        setMenu(populerItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading="Populer Items"
        heading="From our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
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
