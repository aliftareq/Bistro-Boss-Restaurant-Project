import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import PopulerMenu from "../../Home/PopulerMenu/PopulerMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO | MENU</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <div className="mx-20">
        <PopulerMenu />
      </div>
      <Cover img={dessertImg} title="Our Menu"></Cover>
      <div className="mx-20">
        <PopulerMenu />
      </div>
      <Cover img={pizzaImg} title="Our Menu"></Cover>
      <div className="mx-20">
        <PopulerMenu />
      </div>
      <Cover img={saladImg} title="Our Menu"></Cover>
      <div className="mx-20">
        <PopulerMenu />
      </div>
      <Cover img={soupImg} title="Our Menu"></Cover>
      <div className="mx-20">
        <PopulerMenu />
      </div>
    </div>
  );
};

export default Menu;
