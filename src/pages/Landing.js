import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import herroBanner from "../assets/images/main.svg";

const Landing = () => {
  return (
    <div>
      <main className="bg-white  ">
        <nav className="container mx-auto py-4">
          <img alt="Jobs" src={logo} />
        </nav>
        <div className="container  mx-auto ">
          <div className="flex flex-row items-center -mx-5 h-[88vh]">
            <div className="flex-[0_0_50%] px-5 lg:pr-64">
              <h1 className="text-3xl font-bold mb-8">Responsive variants</h1>
              <p className="mb-10">
                The container class also includes responsive variants like
                md:container by default that allow you to make something behave
                like a container at only a certain breakpoint and up:
              </p>

              <Link
                className="rounded-xl uppercase border-solid border border-cyan-600 px-8 py-3 hover:text-red-600 text-[#50d71e] hover:bg-[#000]"
                to="/register"
              >
                Register
              </Link>
            </div>
            <div className="flex-[0_0_50%] px-5">
              <img alt="Banner" src={herroBanner} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
