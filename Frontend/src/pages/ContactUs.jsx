import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Contact Section */}
        <section className="container mx-auto py-16">
          <h1 className="text-4xl font-bold text-center text-emerald-700 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg text-center mb-12">
            Have any questions? Feel free to reach out to us.
          </p>

          {/* Contact Form */}
          {/* <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 h-28 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 rounded-md text-lg font-medium hover:bg-emerald-700 transition">
                Send Message
              </button>
            </form>
          </div> */}
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full border border-gray-300 p-3 transition-all focus:pt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <label
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 
        peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 
        peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600"
                >
                  Full Name
                </label>
              </div>

              {/* Email Address */}
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer w-full border border-gray-300 p-3 transition-all focus:pt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <label
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 
        peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 
        peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600"
                >
                  Email Address
                </label>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder=" "
                  className="peer w-full border border-gray-300 p-3 transition-all focus:pt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <label
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 
        peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 
        peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600"
                >
                  Phone Number
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder=" "
                  className="peer w-full border border-gray-300 p-3 transition-all focus:pt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 h-28 resize-none"
                ></textarea>
                <label
                  className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-not-placeholder-shown:text-[14px] peer-not-placeholder-shown:text-gray-400 
        peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:top-0 
        peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-600"
                >
                  Message
                </label>
              </div>

              {/* Button */}
              <button className="w-full bg-emerald-600 text-white py-3 rounded-md text-lg font-medium hover:bg-emerald-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="container mx-auto text-center pb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            📍 Office Address: Minal Shopping Street, Bhopal, India
          </p>
          <p className="text-gray-600 text-lg">📞 Phone: +91 7000848019</p>
          <p className="text-gray-600 text-lg">
            📧 Email: support@hrportal.com
          </p>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
