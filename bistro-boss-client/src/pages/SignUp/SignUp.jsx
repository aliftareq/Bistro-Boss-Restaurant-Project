import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import "./SignUp.css";
import AuthImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const { createUser } = useContext(AuthContext);

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     console.log(email, password);
  //     signIn(email, password).then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     });
  //   };

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
                  name="name"
                  placeholder="Type Here"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
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
                  className="input input-bordered"
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
                  className="input input-bordered"
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
                  className="btn btn-neutral bg-[#D1A054] text-white"
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
                <p className="flex justify-evenly text-2xl pt-2">
                  <FaFacebookF />
                  <FaGoogle />
                  <FaGithub />
                </p>
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
