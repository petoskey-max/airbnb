import React from "react";
import four from "../assets/four.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";
import seven from "../assets/seven.jpg";
import eight from "../assets/eight.jpg";
import nine from "../assets/nine.jpg";
import ten from "../assets/ten.jpg";
import Rental from "./Rental";
const Rentals = () => {
  const rentals = [
    { title: "Texas, USA", image: four, price: "1,541" },
    { title: "Texas, USA", image: five, price: "1,541" },
    { title: "Texas, USA", image: two, price: "1,541" },
    { title: "Texas, USA", image: three, price: "1,541" },
    { title: "Texas, USA", image: six, price: "1,541" },
    { title: "Texas, USA", image: seven, price: "1,541" },
    { title: "Texas, USA", image: four, price: "1,541" },
    { title: "Texas, USA", image: eight, price: "1,541" },
    { title: "Texas, USA", image: nine, price: "1,541" },
    { title: "Texas, USA", image: ten, price: "1,541" },
   
  ];

  return (
    <div className="py-3 sm:py-5 ">
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5  w-full   gap-4">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
