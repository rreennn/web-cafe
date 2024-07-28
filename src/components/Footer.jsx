import React from "react";

const footerLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <>
      <div data-aos="slide-up" data-aos-once="true" className="bg-gradient-to-r from-lightshade to-darkshade text-white min-h-[20rem] mt-8">
        <div className="grid md:grid-cols-3 pb-20 pt-8 px-8">
          <div>
            <a
              href="#"
              className="text-3xl font-semibold font-logo tracking-wider"
            >
              Kohi-shop
            </a>
            <p className="text-sm pt-4">
              The cozy cafe, offers tranquil space, the soothing aroma of
              freshly ground coffee, and comfortable ambience. Locally sourced
              ingredients for our pastries and sandwich.
            </p>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="text-sm inline-block py-2 px-4 mt-4 rounded-full bg-darkshade hover:bg-primary hover:text-black duration-200"
            >
              Our Youtube Channel
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:pl-16 pt-6">
            <div>
              <h1 className="text-xl font-semibold pt-3 pb-4 mx-auto">Links</h1>
              <ul>
                {footerLink.map((data, index) => {
                  return (
                    <li key={index} className="pb-3">
                      <a
                        href={data.link}
                        className="text-gray-400 hover:text-white duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold pt-3 pb-4">Address</h1>
              <div>
                <p>123 Main Street Serenity Falls, 55555 United States</p>
                <p>(555) 368-1234</p>
                <div className="pt-3 flex gap-4">
                    <a href="#" className="flex items-center gap-3">
                        <img src="facebook.svg" alt="" className="w-5"/>
                    </a>
                    <a href="#" className="flex items-center gap-3">
                        <img src="linkedin.svg" alt="" className="w-5"/>
                    </a>
                    <a href="#" className="flex items-center gap-3">
                        <img src="whatsapp.svg" alt="" className="w-5"/>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
