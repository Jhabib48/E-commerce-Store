import React from "react";
import Img1 from "./images/shirt.png";
import Img2 from "./images/shirt2.png";
import Img3 from "./images/shirt3.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "Upgrade your everyday wardrobe with our Casual Wear T-shirt. Made from soft, breathable fabric, this versatile tee is perfect for lounging at home or running errands in style."
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description: "Make a bold statement with our Printed Shirt. Featuring eye-catching designs and vibrant colors, this tee is sure to turn heads wherever you go. Crafted from high-quality materials, it offers both style and comfort."
  },
  {
    id: 3,
    img: Img3,
    title: "Women's Shirt",
    description: "Elevate your wardrobe with our Women's Shirt. Designed to flatter your figure and enhance your style, this shirt is a must-have for any fashion-forward woman. With its soft fabric and elegant design, it's perfect for both casual outings and special occasions."
  }
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="flex justify-center align-middle text-center mb-10" >
      <div className="container justify-center flex-wrap mr-20">
        {/* Header section */}
        <div className="text-center mb-20 max-w-[600px] mx-auto justify-normal">
          <p data-aos="fade-up" className="text-sm text-primary ml-8">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ml-10">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mb-10 ml-10 text">
          Urbanglow: Where Urban Edge Meets Contemporary Style, Embrace the Vibrancy of City Life with Our Trendsetting Apparel.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ml-20">
          {ProductsData.map((data) => (
           <div
           data-aos="zoom-in"
           className="rounded-2xl bg-white dark:bg-pink-500 hover:bg-pink-50 dark:hover:bg-primary hover:text-red relative shadow-xl duration-300 group max-w-[300px]"
         >
         
              {/* image section */}
              <div className="h-[100px] mt-10">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-500 light-gray-shadow rounded-xl"
                  />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center mt-8">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
               <Link to="/shoppingchart"><button
                  className="bg-pink-200 hover:scale-105 duration-300 py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}>
                  Shop Now
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;