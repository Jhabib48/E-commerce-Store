import React, { useEffect } from "react";
import { useState } from "react";
const Item = ({img, title, newPrice, totalCost, count}) => {    

  const [count, setCount] = useState(0);
    //Cost for shipping
    const shippingCost = 4.99; 

    return ( 
        <body>
        <div class="h-screen bg-gray-100 pt-20">
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                {/* ITEM IMAGE */}
                <img src={img} alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                      {/* THE ITEM TITLE */}
                    <h2 class="text-lg font-bold text-gray-900">{title}</h2>
                     {/* THE COST OF THE ITEM */}
                    <p class="mt-1 text-xs text-gray-700">${newPrice} USD</p>
                  </div>
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        {/* INCREASE OR DECRESE THE NUMBER OF ITEMS */}
                      <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={count--}> - </span>
                      <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" max={"10"} />
                      <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={count++}> + </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CHECKOUT  */}
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div class="mb-2 flex justify-between">
                  {/* THE TOTAL COST OF THE ITEM GOES HERE */}
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">${totalCost}</p>
              </div>
              {/* CREATE SHIPPING COST VAR RATHER SOME RANDOME NUMBER */}
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">${shippingCost}</p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                    {/* THE SUBTOTAL INCLUDING SHIPPING */}
                  <p class="mb-1 text-lg font-bold">${totalCost + shippingCost} USD</p>
                  <p class="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
            </div>
          </div>
        </div>
      </body>
     );
}
 
export default Item;