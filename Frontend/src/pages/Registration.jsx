import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TermsModal from "../components/TermsModal";

const Registration = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg my-5">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Employee Registration
      </h2>

      {/* Form Inputs */}
      <form className="space-y-4">
        {/* Full Name */}
        <div className="relative">
          <input
            type="text"
            placeholder=" "
            className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
            Full Name
          </label>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="email"
              placeholder=" "
              className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
              Email Address
            </label>
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder=" "
              className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
              Phone Number
            </label>
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="password"
              placeholder=" "
              className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder=" "
              className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
              Confirm Password
            </label>
          </div>
        </div>

        {/* Gender */}
        <div>
          <span className="text-gray-600 font-medium">Gender:</span>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="peer mr-2 radio text-emerald-600"
              />
              <span className="peer-checked:text-emerald-600">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="peer mr-2 radio text-emerald-600"
              />
              <span className="peer-checked:text-emerald-600">Female</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="peer mr-2 radio text-emerald-600"
              />
              <span className="peer-checked:text-emerald-600"> Other</span>
            </label>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="relative">
          <input
            type="date"
            placeholder=" "
            className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all opacity-0 peer-focus:opacity-100 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
            Date of Birth
          </label>
        </div>

        {/* Qualifications & Department */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Qualification
            </label>
            <select className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Select</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Department
            </label>
            <select className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Select</option>
              <option>HR</option>
              <option>Engineering</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>

        {/* Position & Hired Date */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer w-full border border-gray-300 p-3 focus:pt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
              Position
            </label>
          </div>
          <div className="relative">
            <input
              type="date"
              placeholder=" "
              className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all opacity-0 peer-focus:opacity-100 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
              Hired Date
            </label>
          </div>
        </div>

        {/* Salary */}
        <div className="relative">
          <input
            type="number"
            placeholder=" "
            className="peer w-full border border-gray-300 p-3 focus:pt-5 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600">
            Salary
          </label>
        </div>

        {/* Terms & Conditions */}
        
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            className="mr-2 checkbox bg-white checked:bg-white checked:border-emerald-600 focus:ring-emerald-500 checked:text-emerald-600"
            checked={agreed}
            onChange={handleCheckboxChange}
          />
          <span className="text-gray-600 text-sm">
            I agree to the{" "}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-emerald-600 underline hover:text-emerald-800"
            >
              Terms & Conditions
            </button>
          </span>
        </div>

        {/* Register Button */}
        
        <button
          disabled={!agreed}
          className={`w-full text-white py-3 rounded-md text-lg font-medium transition duration-300 ${
            agreed
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Register
        </button>

        {/* Login Link */}
        <div className="flex items-center gap-2 justify-center">
          <span className="text-gray-600">Already have an account?</span>
          <span
            onClick={() => navigate("/login")}
            className="text-emerald-600 font-medium hover:underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </form>
      {/* Modal */}
      <TermsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Registration;
