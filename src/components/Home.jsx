import React from "react";

const Home = () => {
  return (
    <>
    <span id="menu"></span>
      <div className="min-h-[100vh] md:min-h-[70vh] w-[100%] bg-gradient-to-b from-secondary to-primary justify-center items-center flex flex-col">
        <div className="hero grid grid-cols-1 md:grid-cols-2 w-full px-20">
          <div className="pt-6 flex flex-col items-center md:items-start justify-center">
            <h1 data-aos="fade-up" data-aos-once="true" className="text-4xl tracking-wide md:text-6xl mb-[-30px] md:mb-5 font-sans font-semibold text-center md:text-start">
              Rich{" "}
              <span className="font-logo font-semibold text-darkshade">
                {" "}
                Coffee{" "}
              </span>{" "}
              and
              <span className="font-logo font-semibold text-lightshade">
                {" "}
                Cozy{" "}
              </span>{" "}
              Cafe for You
            </h1>
            <button className="opacity-0 md:opacity-100 btn-md bg-secondary">Learn More</button>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" className="flex md:left-10 md:pt-[50px] items-center justify-center relative">
            <img src="coffee.png" alt="" className="w-[400px] spin " />
            <div className="bg-gradient-to-r rounded-xl from-lightshade to-darkshade py-1 px-8 absolute md:top-24 top-16 left-[-50px] md:left-5 lg:left-14">
                <h1 className="text-sm md:text-lg font-semibold text-primary">Keep Calm</h1>
            </div>
            <div className="bg-gradient-to-r rounded-xl from-lightshade to-darkshade py-1 px-7 absolute bottom-16 right-[-50px] md:right-5 lg:right-14">
                <h1 className="text-sm md:text-lg font-semibold text-white">Enjoy Life!</h1>
            </div>
          </div>
            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300" className="flex justify-center items-center">
                <button className="mt-5 btn-md bg-secondary md:hidden">Learn More</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
