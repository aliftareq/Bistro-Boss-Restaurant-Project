import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    //image upload to imagebb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to the server with image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res?.data?.data?.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        //show success popup
        Swal.fire({
          position: "center",
          icon: "success",
          title: ` ${data.name} is successfully updated to the Menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/dashboard/manageItems");
      }
    }
  };

  return (
    <div>
      {/* page header  */}
      <SectionTitle subHeading="Checkout!" heading="UPDATE ITEM"></SectionTitle>
      {/* form  */}
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-base-200 mx-12 md:mx-32 mb-20 p-8 md:p-10"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Recipe name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered"
            />
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                defaultValue={price}
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Recipe Details*</span>
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered h-32"
            ></textarea>
          </div>
          <div className="my-5">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="my-5 flex justify-center items-center">
            <input
              className="btn text-white bg-gradient-to-l from-[#B58130] to-[#835D23] hover:opacity-90"
              type="submit"
              value="Update Item"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
