import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <div className="pt-[30px] md:pt-0">
          <Home />
        </div>
        <div>
          <Menu />
        </div>
        <Banner />
      </div>
    </>
  );
};

export default App;
