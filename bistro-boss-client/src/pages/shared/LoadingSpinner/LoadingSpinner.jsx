import Spinner from "../../../assets/others/loader3.gif";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-full h-screen" src={Spinner} alt="loading spinner" />
    </div>
  );
};

export default LoadingSpinner;
