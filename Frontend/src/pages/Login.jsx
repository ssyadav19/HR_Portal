import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
    // console.log(name, value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const res = await axios.post("http://localhost:4500/api/auth/login", data);

    console.log(res.data.message);
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto min-h-screen flex items-center justify-center">
        <div className="mx-auto bg-white p-6 rounded-lg shadow-lg mt-5 w-full">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Login to your Account
          </h2>
          <form onSubmit={handelSubmit}>
            <div className="space-y-6">
              {/* Email Input with Floating Label */}

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handelChange}
                  className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-transparent"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600"
                >
                  Email
                </label>
              </div>

              {/* Password Input with Floating Label */}
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handelChange}
                  className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-transparent"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600"
                >
                  Password
                </label>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition duration-300">
                Login
              </button>
            </div>
          </form>

          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-gray-600">Don't have an account?</span>
            <span
              onClick={() => {
                navigate("/register");
              }}
              className="text-emerald-600 font-medium hover:underline cursor-pointer"
            >
              Create One
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
