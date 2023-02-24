import React from "react";

import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex shadow-lg bg-white p-4 justify-between items-center">
      <div className="flex space-x-3">
        <p className="text-black font-extrabold text-xl">Home</p>
      </div>
      <div className="flex space-x-4 text-center justify-center items-center h-fit align-middle">
        <IoIosNotificationsOutline className="text-4xl text-[#808080] border-r-gray-500 border-l-gray-500 " />
        <div className="flex ">
          <div className="flex items-center justify-center flex-none w-8 h-8 mx-auto bg-dark-purple rounded-full mr-2 text-white">
            <p>L</p>
          </div>
          <p className="text-gray-600 font-semibold">Lapo John</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
