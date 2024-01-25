import React from "react";
import { BsStarFill } from "react-icons/bs";
const Rental = ({ title, image, price }) => {
  return (
    <div>
      <div className="relative">
        <div className="grad absolute h-full w-full  rounded-b-[1.3rem]"></div>
        <div className="flex ">
          {/* Background */}
          <img
            src={image}
            alt=""
            className="object-cover rounded-[1.3rem] w-full   md:max-h-[13rem]"
          />
        </div>
        {/* Title */}

        <div className="absolute text-white items-center font-bold bottom-6 flex left-5 text-[20px] gap-2">
          {title}
          <span>&#8226;</span>
          <p className="text-gray-300 text-[16px]">${price}</p>
        </div>
      </div>
      {/* Description */}
      <div className="pt-3 flex justify-between items-start">
        {/* Left */}
        <div>
          <p className="max-w-[17rem] font-semibold text-[17px]">
            This is a rare find.
          </p>
          <p className="max-w-[17rem] -mt-1 text-[17px] text-gray-500">
            Jan 28 - Aug 9
          </p>
          <p className="max-w-[17rem] font-semibold text-[17px]">${price}</p>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-2">
          <BsStarFill /> <p className="text[15px]">5.0</p>
        </div>
      </div>
    </div>
  );
};

export default Rental;
