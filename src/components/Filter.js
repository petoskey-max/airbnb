import React from "react";

const Filter = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2 py-1 sm:px-4 px-3 mt-2 text-white bg-[#ff5a60] rounded-full hover:bg-white text-[15px] sm:text-[16px]  hover:text-[#ff5a60] hover:font-bold duration-200 ease-out">
      {icon}
      {title}
    </div>
  );
};

export default Filter;
