import React from "react";

import {  IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex shadow-lg bg-white p-4 justify-between items-center">
      <div className="flex space-x-3">
        <p className="text-black font-extrabold text-xl">Home</p>
      </div>
      <div className="flex space-x-6 text-center justify-center items-center w-1/6 h-fit">
        <IoIosNotificationsOutline className="text-4xl text-[#808080]   border-r-gray-500 border-l-gray-500 " />
        <div className="flex w-full">
          <div className="w-2/6 h-2/6 bg-dark-purple text-white rounded-full text-center mr-2" >
            <p>L</p>
          </div>
          <p className="text-gray-600 font-semibold w-full">Lapo John</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
