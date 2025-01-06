import { useContext, useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import "./SignUp.css";
import AuthImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="hero SignUp-item min-h-screen">
      <div className="hero-content flex-col lg:flex-row relative shadow-[5px_5px_15px_0_rgba(0,0,0,0.3)] md:px-20 md:py-20 lg:px-4 lg:py-4 lg:my-8">
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-2xl text-center font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type Here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="input input-bordered"
                required
              />
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
  );
};

export default SignUp;
