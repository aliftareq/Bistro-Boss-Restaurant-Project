import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import PopulerMenu from "../../Home/PopulerMenu/PopulerMenu";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu?.filter((item) => item.category === "dessert");
  const pizzas = menu?.filter((item) => item.category === "pizza");
  const salads = menu?.filter((item) => item.category === "salad");
  const soups = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>BISTRO | MENU</title>
      </Helmet>
      <div>
        <Cover img={menuImg} title="Our menu"></Cover>
        <SectionTitle
          subHeading="Don't miss"
          heading="TODAY'S OFFER"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>
      <MenuCategory items={desserts} title="Desserts" img={dessertImg} />
      <MenuCategory items={pizzas} title="Pizza" img={pizzaImg} />
      <MenuCategory items={salads} title="Salad" img={saladImg} />
      <MenuCategory items={soups} title="Soup" img={soupImg} />
    </div>
  );
};

export default Menu;
