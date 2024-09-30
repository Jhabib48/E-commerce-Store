import { Link } from  "react-router-dom";
import React from "react";

const AdminNavBar = () => {
    return (
        <div
            id="view"
            className="h-full w-max flex ml-0"
            x-data="{ sidenav: true }">
            <button
            className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-red-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
            >
                <svg
                className="w-5 h-5 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                ></path>
                </svg>
            </button>
                <div className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden">

                <div className="space-y-6 md:space-y-10 mt-10">
                <h1 className="font-bold text-4xl text-center md:hidden">
                </h1>
                <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                    <span className="text-pink-600"></span>
                </h1>
                <div id="profile" className="space-y-3">
                    <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="Avatar user"
                    className="w-10 md:w-16 rounded-full mx-auto"
                    />
                    <div>
                    <h2 className="font-medium text-center text-pink-500 text-lg">
                        Habib Javed
                    </h2>
                    <p className="text-xs text-gray-500 text-center">Administrator</p>
                    </div>
                </div>
                <div
                    className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-pink-500"
                >
                    <input
                    type="text"
                    className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                    placeholder="Search"
                    />
                    <button
                    className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block"
                    >
                    <svg
                        className="w-4 h-4 fill-current"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                    </button>
                </div>
                <div id="menu" className="flex flex-col space-y-2">
                    <Link to="/user" >
                        <div className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-pink-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                                        <svg
                                            className="w-6 h-6 fill-current inline-block"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                            ></path>
                                        </svg>
                                        <span>Users</span>
                        </div>
                    </Link>
                    <Link to="/adminProductList" >
                        <div
                            class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-pink-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                ></path>
                            </svg>
                            <span>Products</span>
                            </div>
                    </Link>
                        <a
                        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-pink-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                        <svg
                            class="w-6 h-6 fill-current inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path
                            fill-rule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="">Reports</span>
                        </a>
                        <a
                        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-pink-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                        <svg
                            class="w-6 h-6 fill-current inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="">Calendar</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default AdminNavBar;