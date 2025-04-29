import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  //request interceptor is used for add "authorization header" for every secure call to the api;
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  //intercept 401 & 403
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;

      //for 401 & 403 "forbidden response" logging out the user and navigating login page.
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Token destroyed!!! Login again.",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
