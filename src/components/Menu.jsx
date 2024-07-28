import React from "react";

const MenuData = [
  {
    id: 1,
    img: "espresso.png",
    name: "Espresso",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias.",
    aosDelay: 100,
  },
  {
    id: 2,
    img: "espresso.png",
    name: "Americano",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quod.",
    aosDelay: 300,
  },
  {
    id: 3,
    img: "espresso.png",
    name: "Tubruk Coffee",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quod.",
    aosDelay: 500,
  },
];
const Menu = () => {
  return (
    <>
      <span id="menu"></span>
      <div>
        <div className="py-8">
          <h1 className="text-2xl text-center font-bold text-gray-800 mb-16">
            Today's Black Coffee ♥
          </h1>
          <div className="grid gap-20 md:gap-0 md:grid-cols-3 place-items-center">
            {MenuData.map((data, index) => {
              return (
                <div data-aos="fade-up" data-aos-delay={data.aosDelay}>
                  <div
                    key={index}
                    className="max-w-[300px] duration-200 rounded-2xl bg-primary hover:bg-secondary hover:text-white shadow-xl group relative"
                  >
                    <div className="h-[150px]">
                      <img
                        src={data.img}
                        alt=""
                        className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110, group-hover:rotate-12 duration-300"
                      />
                    </div>
                    <div>
                      <div className="px-4 pb-4 text-center">
                        <h1 className="text-xl font-bold">{data.name}</h1>
                        <p className="">{data.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
