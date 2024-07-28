import React from "react";
import Slider from "react-slick/lib/slider";

const TestimonialData = [
  {
    id: 1,
    name: "Himeko",
    text: "I love the espresso, can I get your recipe? I will definitely come again ;)",
    img: "https://i.pinimg.com/564x/d2/97/43/d297439eba703de789cba6e8d2864792.jpg",
  },
  {
    id: 2,
    name: "Alhaitham",
    text: "Drinking coffee while reading books is a simple thing, and I enjoying it here.",
    img: "https://i.pinimg.com/564x/76/05/33/7605331b1349cede4885916ddcd9b23f.jpg",
  },
  {
    id: 3,
    name: "Wise",
    text: "The coffee is very good! I recommend it while watching our videos ^^",
    img: "https://i.pinimg.com/564x/76/72/a2/7672a21e00698a6d7c42ad3b55fad946.jpg",
  },
  {
    id: 4,
    name: "Changli",
    text: "It's very tasty, definitely will share this cafe with my colleagues.",
    img: "https://i.pinimg.com/736x/55/11/61/5511610508284862f0d1df7513b7da4c.jpg",
  },
];
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col w-[80%] mx-auto">
        <div className="">
          <h1 className="text-3xl text-center font-bold font-logo text-gray-800 mb-10">
            What they said about our cafe ♥
          </h1>
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => {
                return (
                  <div className="" key={data.id}>
                    <div className="min-h-[16rem] flex flex-col gap-4 h-auto rounded-lg drop-shadow-md px-6 py-5 mx-4 bg-gradient-to-b from-primary to-secondary relative">
                      <div className="mb-3">
                        <img
                          src={data.img}
                          alt=""
                          className="w-20 h-20 rounded-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1 className="font-bold font-logo text-lg">-{data.name}</h1>
                        <p className="text-sm text-white">{data.text}</p>
                        <p className="text-8xl font-serif text-black/30 absolute top-12 right-6">,,</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
