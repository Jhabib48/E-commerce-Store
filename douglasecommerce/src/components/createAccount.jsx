import React, { useState } from 'react';

const CreateAccount = ({addNewCustomer = f => f}) => {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) =>{
      event.preventDefault(); 
      addNewCustomer(firstName, lastName, username, emailAddress, address, city, postalCode, password )
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmailAddress("");
      setAddress("");
      setCity("");
      setPostalCode("");
      setPassword("");
  }

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-solid border border-blueGray-100">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                My account
              </h6>
              <button 
                onClick={onSubmit}
                type="submit"
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                Create Account
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Username
                    </label>
                    <input
                     type="text" 
                     id='username'
                     required placeholder='UserName'
                     onChange={(event)=> setUsername(event.target.value)}
                     className="border-solid border border-blueGray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Email address
                    </label>
                    <input 
                    id='emailAddress'
                    required placeholder='Email Address'
                    onChange={(event)=> setEmailAddress(event.target.value)}
                    type="text" className="border-solid border border-blueGray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      First Name
                    </label>
                    <input 
                    id='firstName'
                    required placeholder='First Name'
                    onChange={(event)=>setFirstName(event.target.value)}
                    type="text" className="border-solid border border-blueGray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Last Name
                    </label>
                    <input
                    id='Last Name'
                    required placeholder='Last Name'
                    onChange={(event)=>setLastName(event.target.value)}
                    type="text" className="border-solid border border-blueGray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-solid border-b border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Address
                    </label>
                    <input 
                    id='address'
                    required placeholder='Address'
                    onChange={(event)=>setAddress(event.target.value)}
                    type="text" className="border-solid border border-blueGray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      City
                    </label>
                    <input 
                    id='city'
                    required placeholder='City'
                    onChange={(event)=>setCity(event.target.value)}
                    type="text" className="border-solid border border-blueGray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Postal Code
                    </label>
                    <input 
                    id='postalcode'
                    required placeholder='Postal Code'
                    onChange={(event)=>setPostalCode(event.target.value)}
                    type="text" className="border-solid border border-blueGray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Password
                    </label>
                    <input 
                    id='password'
                    required placeholder='Password'
                    onChange={(event)=>setPassword(event.target.value)}
                    type="text" className="border-solid border border-blueGray-200 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
