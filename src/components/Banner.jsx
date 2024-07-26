import React from "react";

const Banner = () => {
  return (
    <>
      <div className="py-8">
        <div className="w-full min-h-[550px] flex justify-center items-center bg-[url('banner.jpg')] bg-no-repeat bg-cover">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 place-items-center md:px-[150px]">
            <div className="max-w-full">
              <img
                src="cappuccino.png"
                alt=""
                className="w-[200px] md:w-[300px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-0 md:gap-3">
              <h1 className="text-center md:text-start pt-10 md:pt-0 text-3xl md:text-4xl font-logo mb-3">
                One Cup of Coffee for You
              </h1>
              <p className="px-12 text-center md:px-0 md:text-start text-sm leading-5 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur nemo enim neque, numquam incidunt velit.
              </p>
              <div className="w-full grid grid-cols-2">
                <div className="flex flex-col gap-3 px-5 md:px-0 md:mt-0 mt-5">
                  <div className="flex items-center gap-3">
                    <img
                      src="heart.svg"
                      alt=""
                      className="w-[35px] bg-secondary rounded-lg"
                    />
                    <span className="text-sm">Made with Love</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="smile.svg"
                      alt=""
                      className="w-[35px] bg-secondary rounded-lg"
                    />
                    <span className="text-sm">Comfy Place</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="gift.svg"
                      alt=""
                      className="w-[35px] bg-secondary rounded-lg"
                    />
                    <span className="text-sm">Share with Friends</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h1 className="text-lg">By Ren</h1>
                  <p className="text-[12px] md:text-sm">
                    Step into our cozy cafe for a perfect blend of relaxation
                    and imagination. Sip on our signature "Writer's Block-Black Coffee"
                    and discover an ambiance designed to inspire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
