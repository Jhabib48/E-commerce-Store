import React from 'react';
import { Link } from 'react-router-dom';

const PaymentForm = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16 mt-10">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>
        <div className="w-full pt-1 pb-5">
         
        </div>
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase">URBANGLOW PAYMENT</h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-5 w-5 text-red-500" name="type" id="type1" defaultChecked />
              <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt="Card Type 1" />
            </label>
          </div>
          <div className="px-2">
            <label htmlFor="type2" className="flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-5 w-5 text-red-500" name="type" id="type2" />
              <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" alt="Card Type 2" />
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardName">Name on card</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-red-500 transition-colors" placeholder="Name on Card" type="text" id="cardName" />
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardNumber">Card number</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-red-500 transition-colors" maxLength="16" placeholder="0000-0000-0000-0000" type="text" id="cardNumber" />
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-red-500 transition-colors cursor-pointer" id="expirationMonth">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          </div>
          <div className="px-2 w-1/2">
            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-red-500 transition-colors cursor-pointer" id="expirationYear">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            </select>
          </div>
        </div>
        <div className="mb-10">
          <label className="font-bold text-sm mb-2 ml-1" htmlFor="securityCode">Security code</label>
          <div>
            <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-red-500 transition-colors" placeholder="000" type="text" maxLength="3" id="securityCode" />
          </div>
        </div>
        <div>
          <Link to="/" ><button className="block w-full max-w-xs mx-auto bg-pink-500 hover:bg-pink-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button></Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
