import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart({ item, totalCost }) {
   // Check if item is an array, if not, convert it to an array with a single element
   const items = Array.isArray(item) ? item : [item];
   
   // Calculate shipping cost per item
   const PST_RATE = 0.07; // 7%
   const GST_RATE = 0.05; // 5%
   
   // Initialize counts for each item
   const initialCounts = Array(items.length).fill(1);
   const [counts, setCounts] = useState(initialCounts);

   // Initialize shipping cost and sales tax to 0
   let shippingCost = 0;
   let salesTax = 0;

   if (items.length > 0 && counts.every(count => count > 0)) {
      // Calculate shipping cost per item
      shippingCost = Math.ceil(5);

      // Calculate total cost without tax
      const totalCostWithoutTax = items.reduce((acc, currentItem, index) => {
         return acc + counts[index] * (currentItem.newPrice + shippingCost);
      }, 0);        

      // Calculate PST and GST amounts
      const PST = Math.ceil(totalCostWithoutTax * PST_RATE);
      const GST = Math.ceil(totalCostWithoutTax * GST_RATE);

      // Total sales tax amount
      salesTax = Math.ceil(PST + GST);
   }

   // Function to handle increasing item quantity
   const handleIncrement = (index) => {
      if (counts[index] < 10) {
         const newCounts = [...counts];
         newCounts[index]++;
         setCounts(newCounts);
      }
   };

   // Function to handle decreasing item quantity
   const handleDecrement = (index) => {
      if (counts[index] > 1) {
         const newCounts = [...counts];
         newCounts[index]--;
         setCounts(newCounts);
      }
   };

   return (
      <div className="h-screen bg-gray-100 pt-20">
         <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
               {/* Render items in the cart */}
               {items.length > 0 ? (
                  items.map((singleItem, index) => (
                     <div key={index} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        {/* ITEM IMAGE */}
                        <img src={singleItem.img} alt="product-image" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                           <div className="mt-5 sm:mt-0">
                              {/* THE ITEM TITLE */}
                              <h2 className="text-lg font-bold text-gray-900">{singleItem.title}</h2> 
                              {/* THE COST OF THE ITEM */}
                              <p className="mt-1 text-xs text-gray-700">${singleItem.newPrice} USD</p> 
                           </div>
                           <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                              <div className="flex items-center border-gray-100">
                                 {/* INCREASE OR DECREASE THE NUMBER OF ITEMS */}
                                 <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleDecrement(index)}> - </span>
                                 <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={counts[index]} min="1" max={"10"} readOnly />
                                 <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleIncrement(index)}> + </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))
               ) : (
                  // Display message if cart is empty
                  <p className='mt-2 font-bold'>Your cart is empty.</p>
               )}
            </div>
            {/* CHECKOUT  */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
               <div className="mb-2 flex justify-between">
                  {/* THE TOTAL COST OF THE ITEM GOES HERE */}
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">${salesTax}</p>
               </div>
               {/* CREATE SHIPPING COST VAR RATHER SOME RANDOM NUMBER */}
               <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">${shippingCost}</p>
               </div>
               <hr className="my-4" />
               <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div>
                     {/* THE SUBTOTAL INCLUDING SHIPPING */}
                     <p className="mb-1 text-lg font-bold">${salesTax} USD</p>
                     <p className="text-sm text-gray-700">including Tax of ${salesTax + shippingCost}</p>
                  </div>
               </div>
               {/* Render "Check out" button only if cart is not empty */}
               {items.length > 0 && (
                  <Link to="/paymentForm">
                     <button className="mt-6 w-full rounded-md bg-pink-500 py-1.5 font-medium text-pink-50 hover:bg-pink
                     -600">Check out</button>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      );
   }
   
   export default Cart;
   






//    <body>
//             <div class="h-screen bg-gray-100 pt-20">
//                 <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//                     <div class="rounded-lg md:w-2/3">
//                         {item.map((singleItem, index) => (
//                             <div 
//                               key={index}
//                             class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//                                 ITEM IMAGE
//                                 <img src={singleItem.img} alt="product-image" class="w-full rounded-lg sm:w-40" />
//                                 <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                                     <div class="mt-5 sm:mt-0">
//                                         THE ITEM TITLE
//                                         <h2 class="text-lg font-bold text-gray-900">{singleItem.title}</h2> {/* Changed variable name here */}
//                                         THE COST OF THE ITEM
//                                         <p class="mt-1 text-xs text-gray-700">${singleItem.newPrice} USD</p> {/* Changed variable name here */}
//                                     </div>
//                                     <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                                         <div class="flex items-center border-gray-100">
//                                             INCREASE OR DECRESE THE NUMBER OF ITEMS
//                                             <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
//                                             <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" max={"10"} />
//                                             <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {/* CHECKOUT  */}
//                     <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//                         <div class="mb-2 flex justify-between">
//                             {/* THE TOTAL COST OF THE ITEM GOES HERE */}
//                             <p class="text-gray-700">Subtotal</p>
//                             <p class="text-gray-700">${totalCost}</p>
//                         </div>
//                         {/* CREATE SHIPPING COST VAR RATHER SOME RANDOME NUMBER */}
//                         <div class="flex justify-between">
//                             <p class="text-gray-700">Shipping</p>
//                             <p class="text-gray-700">${shippingCost}</p>
//                         </div>
//                         <hr class="my-4" />
//                         <div class="flex justify-between">
//                             <p class="text-lg font-bold">Total</p>
//                             <div class="">
//                                 {/* THE SUBTOTAL INCLUDING SHIPPING */}
//                                 <p class="mb-1 text-lg font-bold">${totalCost + shippingCost} USD</p>
//                                 <p class="text-sm text-gray-700">including VAT</p>
//                             </div>
//                         </div>
//                         <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
//                     </div>
//                 </div>
//             </div>
//         </body>



//OTHER CODE
//   const navigate = useNavigate()
//   const [total, setTotal] = useState(0)

//     const carts = JSON.parse(localStorage.getItem('cart')) || []

//     useEffect(() => {
//       const total = carts.reduce((acc, item) => {
//         return acc + (item.price * item.quantity)
//       }, 0)
//       setTotal(total)
//     }, [carts])

//     const handleInc = (id) => {
//       const updatedCart = carts.map(item => {
//         if(item.id === id){
//           return{
//             ...item,
//             quantity: item.quantity + 1
//           }
//         }
//         return item
//       })
//       localStorage.setItem('cart', JSON.stringify(updatedCart))
//       navigate('/cart')
//     }

//     const handleDec = (id ) => {
//       const updatedCart = carts.map(item => {
//         if(item.id === id){
//           const newQuantity = Math.max(1, item.quantity - 1);
//           return{
//             ...item,
//             quantity: newQuantity
//           }
//         }
//         return item
//       })
//       localStorage.setItem('cart', JSON.stringify(updatedCart))
//       navigate('/cart')
//     }

//     const removeProduct = (id) => {
//       const updatedCart = carts.filter(item => item.id !== id)
//       localStorage.setItem('cart', JSON.stringify(updatedCart))
//       navigate('/cart')
//     }


//     if(carts.length===0){
//       return <h1 className=' h-[55vh] flex justify-center items-center text-4xl'>Cart is Empty</h1>
//     }

     