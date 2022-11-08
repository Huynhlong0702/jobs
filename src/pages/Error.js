import { Link } from "react-router-dom";
import image from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center">
      <img
        src={image}
        alt="404 not found"
        className="m-auto mt-0 mb-8 w-[300px] md:w-[400px] lg:w-[500px] max-w-full"
      />
      <h1 className="font-bold text-4xl my-5">Ohh! Page Not Found</h1>
      <p className="mb-8 text-2xl capitalize">
        We can't seem to find the page you're looking for
      </p>

      <Link
        className="button px-8 py-3 inline-block transition ease-in-out bg-blue-600 hover:bg-blue-400 text-white rounded uppercase"
        to="/landing"
      >
        Back home
      </Link>
    </div>
  );
};

export default Error;
