import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const AddReviews = () => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    //console.log("Selected Rating:", rate);
  };

  const onSubmit = async (data) => {
    //now send the menu item data to the server with image
    const ReviewInfo = {
      name: user?.displayName,
      email: user?.email,
      likedRecipe: data?.likedRecipe,
      rating: rating,
      details: data?.details,
      suggestion: data?.suggestion,
    };
    console.log(ReviewInfo);
    const ReviewRes = await axiosSecure.post("/reviews", ReviewInfo);
    console.log(ReviewRes.data);
    if (ReviewRes.data.insertedId) {
      //show success popup
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Review has been posted!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

  return (
    <div>
      <SectionTitle
        subHeading="Sharing is Caring!!!"
        heading="GIVE A REVIEW"
      ></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-base-200 mx-4 md:mx-32 mb-20 p-8 md:p-10"
        >
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
                {...register("likedRecipe", { required: true })}
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
                {...register("suggestion", { required: true })}
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
                {...register("details", { required: true })}
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
