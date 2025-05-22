import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="text-center py-16 bg-emerald-100">
          <h1 className="text-5xl font-bold text-emerald-700">
            About HR Portal
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Empowering businesses with streamlined HR solutions.
          </p>
        </section>

        {/* Mission & Vision Section */}
        <section className="container mx-auto my-12 grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">
              Our Mission
            </h3>
            <p className="text-gray-500 mt-2">
              We aim to simplify HR management by providing intuitive tools for
              hiring, employee records, and payroll.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">Our Vision</h3>
            <p className="text-gray-500 mt-2">
              To be the leading HR management platform that enhances workplace
              efficiency and employee satisfaction.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="container mx-auto text-center my-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Our Core Values
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Innovation
              </h3>
              <p className="text-gray-500 mt-2">
                Constantly evolving to meet HR challenges with advanced
                technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Integrity</h3>
              <p className="text-gray-500 mt-2">
                Building trust through transparency and ethical practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Collaboration
              </h3>
              <p className="text-gray-500 mt-2">
                Fostering teamwork for better productivity and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-white shadow-md">
          <h2 className="text-3xl font-bold text-gray-700">
            Join Our Community
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Experience seamless HR management with our platform.
          </p>
          <Link to="/register">
            <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-md text-lg hover:bg-emerald-700 transition">
              Get Started
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default About;
