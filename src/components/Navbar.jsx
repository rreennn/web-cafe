import React from "react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky drop-shadow-lg bg-gradient-to-r from-darkshade to-lightshade text-xl p-1 text-gray-300 font-sans flex justify-between">
      <div className="cursor-pointer flex items-center justify-between w-full">
        <div>
          <img
            src="logo.svg"
            alt="logo"
            srcset=""
            className="h-12 inline-block px-1 cursor-pointer"
          />
          <span className="font-logo tracking-wider text-2xl">kohi-shop</span>
        </div>
        <div className="pr-3 flex items-center md:hidden" onClick={() => setOpen(!open)}>
          <img
            className="h-6 inline-block"
            src={open ? "close.svg" : "menu.svg"}
            alt=""
          />
        </div>
      </div>
      <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute md:bg-inherit bg-darkshade w-full md:py-0 py-10 left-0 md:w-auto md:opacity-100 ${open ? 'top-[1px] fixed opacity-100 ' : 'top-[-1000px] opacity-0'} transition-all ease-in duration-200`}>
        <li className="mx-5 my-6 md:my-0">
          <a href="#home" className="text-lg hover:text-primary font-semibold duration-500">
            Home
          </a>
        </li>
        <li className="mx-5 my-6 md:my-0">
          <a href="#" className="text-lg hover:text-primary font-semibold duration-500">
            About
          </a>
        </li>
        <li className="mx-5 my-6 md:my-0">
          <a href="#menu" className="text-lg hover:text-primary font-semibold duration-500">
            Menu
          </a>
        </li>
        <li>
          <button className="btn bg-secondary mx-4">Order Now</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
