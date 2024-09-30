import React from "react";
import brand1 from './images/br-1.png'
import brand2 from './images/br-2.png'
import brand3 from './images/br-3.png'
import brand4 from './images/br-4.png'
import brand5 from './images/br-5.png'

const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-15 hidden md:block bg-pink-200 dark:bg-white bg-opacity-20 justify-evenly"
    >
      <div className="container mb-5">
        <div className="grid grid-cols-5 gap-3 place-items-center">
          <img src={brand1} alt="brand" className="w-[100px] dark:invert hover:bg-gray-50 dark:hover:bg-primary hover:text-red relative" />
          <img src={brand2} alt="brand" className="w-[100px] dark:invert hover:bg-pink-50 dark:hover:bg-primary hover:text-red relative" />
          <img src={brand3} alt="brand" className="w-[100px] dark:invert hover:bg-pink-50 dark:hover:bg-primary hover:text-red relative" />
          <img src={brand4} alt="brand" className="w-[100px] dark:invert hover:bg-pink-50 dark:hover:bg-primary hover:text-red relative" />
          <img src={brand5} alt="brand" className="w-[80100pxpx] dark:invert hover:bg-pink-50 dark:hover:bg-primary hover:text-red relative" />
        </div>
      </div>
    </div>
  );
};

export default Partners;