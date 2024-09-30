import React from "react";
import Img1 from "./images/colo1.jpg";
import Img2 from "./images/color2.jpg";
import Img3 from "./images/color3.jpg";
import Img4 from "./images/color4.jpg";
import Img5 from "./images/color5.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women western",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed T-Shirt",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Ethnic",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Trending T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 flex justify-center">
      <div className="container justify-center flex-wrap mr-20">
        {/* Header section */}
          <div className="align-middle">
              <div className="text-center mb-1 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-sm text-primary">
                  Top Selling Products for you
                </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">
                  Products
                </h1>
                <p data-aos="fade-up" className="text-xs text-gray-400 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                  asperiores modi Sit asperiores modi
                </p>
              </div>
          </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-10 ml-20 mt-10">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3" >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;


