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
  const offered = menu?.filter((item) => item.category === "popular");
  return (
    <div>
      <Helmet>
        <title>BISTRO | MENU</title>
      </Helmet>
      <div>
        <Cover
          img={menuImg}
          title="Our menu"
          text="Would you like to try a dish?"
        ></Cover>
        <SectionTitle
          subHeading="Don't miss"
          heading="TODAY'S OFFER"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>
      <MenuCategory
        items={desserts}
        title="desserts"
        img={dessertImg}
        text="Indulge in our decadent dessert selection, crafted to satisfy every sweet craving. From rich classics to modern delights, each treat is a celebration of flavor and finesse."
      />
      <MenuCategory
        items={pizzas}
        title="pizzas"
        img={pizzaImg}
        text="Discover our handcrafted pizzas, baked to perfection with fresh, premium ingredients. From classic favorites to bold flavors, each slice is a taste of culinary excellence."
      />
      <MenuCategory
        items={salads}
        title="salads"
        img={saladImg}
        text="Refresh your palate with our vibrant salads, made from the freshest seasonal ingredients. Each bowl is a perfect balance of crisp, healthy, and delicious flavors."
      />
      <MenuCategory
        items={soups}
        title="soups"
        img={soupImg}
        text="Warm your soul with our hearty and flavorful soups, crafted with love and fresh ingredients. Each bowl is a comforting hug in every sip"
      />
    </div>
  );
};

export default Menu;
