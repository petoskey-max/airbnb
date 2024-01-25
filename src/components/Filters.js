import React from "react";
import { GrKey } from "react-icons/gr";
import { GiMountaintop } from "react-icons/gi";
import { GiMineExplosion } from "react-icons/gi";
import { MdBedroomChild } from "react-icons/md";
import { SiAlienware } from "react-icons/si";
import Filter from "./Filter";

const Filters = () => {
  const sorting = [
    { title: "key", icon: <GrKey /> },
    { title: "Mount", icon: <GiMountaintop /> },
    { title: "Trending", icon: <GiMineExplosion /> },
    { title: "Private", icon: <MdBedroomChild /> },
    { title: "Ware", icon: <SiAlienware /> },
    
  ];
  return (
    <div className="  ">
      <div className="flex justify-start gap-1 sm:gap-4 mt-4  ">
        {sorting.map((obj) => (
          <Filter title={obj.title} icon={obj.icon}/>
        ))}
      </div>
    </div>
  );
};

export default Filters;
