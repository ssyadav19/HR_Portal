import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}

        {/* Hero Section */}
        <section className="text-center py-20 bg-emerald-100">
          <h1 className="text-5xl font-bold text-emerald-700">
            Welcome to HR Portal
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Your one-stop solution for employee management and hiring
          </p>
          <Link to="/login">
            <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-md text-lg hover:bg-emerald-700 transition">
              Get Started
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="container mx-auto my-12 grid grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Employee Records
            </h3>
            <p className="text-gray-500 mt-2">
              Manage and organize employee details efficiently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Hiring Process
            </h3>
            <p className="text-gray-500 mt-2">
              Streamline recruitment and onboarding workflows.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Payroll Management
            </h3>
            <p className="text-gray-500 mt-2">
              Handle salaries and payroll processing seamlessly.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-white shadow-md">
          <h2 className="text-3xl font-bold text-gray-700">
            Ready to streamline your HR management?
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Join us today and simplify your employee workflows.
          </p>
          <Link to="/register">
            <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-md text-lg hover:bg-emerald-700 transition">
              Register Now
            </button>
          </Link>
        </section>

        {/* Footer */}
        
      </div>
    </>
  );
};

export default Home;
