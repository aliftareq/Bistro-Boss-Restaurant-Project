import { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import AuthImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
  const handlevalidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="hero login-item min-h-screen">
      <div className="hero-content flex-col lg:flex-row relative shadow-[5px_5px_15px_0_rgba(0,0,0,0.3)] md:px-20 md:py-20 lg:px-4 lg:py-4 lg:my-8">
        <div className="md:w-1/2 hidden lg:block">
          <img src={AuthImg} alt="auth" />
        </div>
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-2xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type the captcha here"
                className="input input-bordered"
                required
              />
              <button
                onClick={handlevalidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-neutral bg-[#D1A054] text-white"
                type="submit"
                value="Login"
              />
            </div>
            <div className="flex flex-col text-center text-sm space-y-2 mt-2">
              <p className="text-[#D1A054]">
                New Here?{" "}
                <Link className="underline" to="/sign-up">
                  create a new account
                </Link>
              </p>
              <p className="text-black">Or Sign-In With</p>
              <p className="flex justify-evenly text-2xl pt-2">
                <FaFacebookF />
                <FaGoogle />
                <FaGithub />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
