import React from "react";
import logo from "../assets/airbnb.svg";
import { BiWorld } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SiYourtraveldottv } from "react-icons/si";
const Navbar = () => {
  return (
    <div className="border-b sticky top-0 bg-white/[95%] z-50 ">
            <div className="flex items-center justify-between sm:mx-6 md:mx-10 lg:mx-12">
      {/*Left*/}
      <div className="flex p-2 ">
        <img src={logo} alt="" className="object-cover  p-6 h-20 -my-4"  />
      </div>
      {/*Midddle*/}
      <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-500 border rounded-full">
        <input
          type="search"
          placeholder=""
          className="py-2.5 w-[20rem] rounded-full outline-0"
        />
        <div className="absolute flex justify-between w-full items-center pr-16 pl-6 font-semibold text-gray-600">
          <button className="w-full">Place</button>
          <button className="w-full border-1 border-x px-2">Time</button>
          <button className="w-full text-gray-600/60 pl-2 ">Group Size</button>
        </div>
        <div className="bg-[#ff5a60]  items-center p-2 rounded-full mr-2 ">
          <CiSearch className="text-white" />
        </div>
      </div>
      {/*Right*/}
      <div className="flex items-center pr-3 text-gray-600 font-semibold">
        <p className="text-[17px] ">Travel</p>
        <SiYourtraveldottv />
        <div className="flex items-center mx-8 gap-1">
          <BiWorld className="" />
          <div className="">EN</div>
        </div>

        <div className="flex items-center gap-2 border px-4 py-2 rounded-full bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
          <p>Sign in</p>
          <FaUserCircle className="text-[22px] " />
        </div>
      </div>
    </div>
    </div>

  );
};

export default Navbar;
