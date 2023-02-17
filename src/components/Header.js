import React from "react";

import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex shadow-sm bg-white p-5 justify-between ">
      <div className="flex space-x-3">
        <p className="text-black font-extrabold text-xl">Home</p>
      </div>
      <div className="flex space-x-4  text-center justify-center">
        <IoIosNotifications className="text-3xl" />
        <p className="text-gray-600 font-semibold ">Lapo John</p>
      </div>
    </div>
  );
};

export default Header;
