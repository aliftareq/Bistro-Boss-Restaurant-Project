import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";

const AddReviews = () => {
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    console.log("Selected Rating:", rate);
  };
  return (
    <div>
      <SectionTitle
        subHeading="Sharing is Caring!!!"
        heading="GIVE A REVIEW"
      ></SectionTitle>
      <div>
        <form className="bg-base-200 mx-4 md:mx-32 mb-20 p-8 md:p-10">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-cinzel uppercase">Rate us!</p>
            <Rating
              initialValue={rating}
              value={rating} // Bind value
              onChange={handleRating} // Handle change
              style={{ width: "200px", height: "100px" }}
              className="mt-[-10]"
              /* Available Props */
            />
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Which recipe you liked most?
                </span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Recipe you liked most"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Do you have any suggestion for us?
                </span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Sugggestion"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Kindly express your care in a short way.
                </span>
              </label>
              <textarea
                {...register("recipe", { required: true })}
                placeholder="Review in detail"
                className="textarea textarea-bordered h-32"
              ></textarea>
            </div>
          </div>
          <div className="my-5 flex justify-center items-center">
            <input
              className="btn text-white bg-gradient-to-l from-[#B58130] to-[#835D23] hover:opacity-90"
              type="submit"
              value="Send Review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
