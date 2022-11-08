import { useState } from "react";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Login = () => {
  const [values, setvalues] = useState(initialState);
  return (
    <div className="h-screen items-center flex">
      <div className="w-[500px] max-w-full m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <FormRow
            type="email"
            labelText="Email"
            // value={values.email}
            // handleChange={handleChange}
          ></FormRow>

          <FormRow
            type="password"
            labelText="Password"
            // value={values.password}
            // handleChange={handleChange}
          ></FormRow>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/login"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-[20px]">
            Not a member yet?
            <Link to="/register" className="text-blue-700 underline pl-1">
              Register
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 LongDev. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
