import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Router>
        <Toaster/>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
