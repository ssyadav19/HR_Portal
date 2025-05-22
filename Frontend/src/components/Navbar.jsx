import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-emerald-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:opacity-80">
            HR Portal
          </Link>
          <div className="flex space-x-10 text-lg">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
          <Link to="/login">
            <button className="bg-white text-emerald-600 px-5 py-2 rounded-md text-lg hover:bg-gray-200 transition">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
