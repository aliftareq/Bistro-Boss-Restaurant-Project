import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img: img }) => {
  return (
    <section>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="mx-20 my-10">
        <div className="grid md:grid-cols-2 gap-10">
          {items?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
