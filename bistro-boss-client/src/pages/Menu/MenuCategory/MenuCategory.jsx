import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img: img, text }) => {
  return (
    <section>
      {title && <Cover img={img} title={title} text={text}></Cover>}
      <div className="mx-20 my-10">
        <div className="grid md:grid-cols-2 gap-10">
          {items?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to={`/order/${title || 'salads'}`}>
            <button className="btn btn-outline bg-amber-500 border-0 border-b-4 border-black mt-4 uppercase 
            text-white hover:bg-amber-600">
              Order Your favourite food
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
