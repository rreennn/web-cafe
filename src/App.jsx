import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <>
      <div className="bg-[#F5F3F0]">
        <div className="z-10 fixed w-full">
          <Navbar />
        </div>
        <div className="">
          <Home />
        </div>
        <div>
          <Menu />
        </div>
        <Banner />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
