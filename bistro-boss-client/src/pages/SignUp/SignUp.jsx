import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import "./SignUp.css";
import AuthImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    console.log("google sign in");
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        image: result.user?.photoURL,
        uid: result?.user?.uid,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully signed-Up.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data?.email, data?.password).then((result) => {
      const loggedUser = result.user;
      console.log("loggeduser", loggedUser);
      updateUserProfile(data?.name, data?.photoURL)
        .then(() => {
          //create user data in DB
          const userInfo = {
            name: data?.name,
            email: data?.email,
            image: data?.photoURL,
            uid: result?.user?.uid,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              //reseting form, giving success-message & navigate to homePage
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "You have successfully Signed Up",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>BISTRO | SIGN-UP</title>
      </Helmet>
      <div className="hero SignUp-item min-h-screen">
        <div className="hero-content flex-col lg:flex-row relative shadow-[5px_5px_15px_0_rgba(0,0,0,0.3)] md:px-20 md:py-20 lg:px-4 lg:py-4 lg:my-8">
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-2xl text-center font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Type Here"
                  className="input input-bordered bg-white"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Enter a Photo URL"
                  className="input input-bordered bg-white"
                />
                {errors.photoURL && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Type Here"
                  className="input input-bordered bg-white"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Enter your Password"
                  className="input input-bordered bg-white"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be at least 6 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password must have at least one uppercase, one lowercase,
                    one special character and one number.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] text-white hover:bg-orange-400"
                  type="submit"
                  value="Sign-Up"
                />
              </div>
              <div className="flex flex-col text-center text-sm space-y-2 mt-2">
                <p className="text-[#D1A054]">
                  Already have an account?{" "}
                  <Link className="underline" to="/login">
                    Login
                  </Link>
                </p>
                <p className="text-black">Or Sign up With</p>
                <div className="flex justify-evenly text-2xl pt-2">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn w-full bg-[#D1A054] flex items-center text-white hover:bg-orange-400"
                  >
                    <FaGoogle /> Sign with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 hidden lg:block">
            <img src={AuthImg} alt="auth" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
