import React from "react";
import { useCookies } from "react-cookie";

import { IoIosNotificationsOutline } from "react-icons/io";

const Header = ({ pageName, subPageName }) => {
  const [cookie] = useCookies(["data"]);
  const data = cookie?.data;

  const fullName = data?.cooperativeName
  const nameArray = fullName.split(" ")
  const initials = nameArray.map((name) => name.charAt(0)).join("")

  return (
    <div className="flex shadow-lg bg-white p-4 justify-between items-center">
      <div className="">
        <p className="text-black font-extrabold text-xl">{pageName}</p>
        {subPageName && (
          <p className="text-gray-500 text-sm">
            {pageName}
            <span>{" > "}</span>
            <span>{subPageName}</span>
          </p>
        )}
      </div>
      <div className="flex space-x-4 text-center justify-center items-center h-fit align-middle">
        <IoIosNotificationsOutline className="text-4xl text-[#808080] border-r-gray-500 border-l-gray-500 " />
        <div className="flex ">
          <div className="flex items-center justify-center flex-none w-8 h-8 mx-auto bg-dark-purple rounded-full mr-2 text-white">
            <p>{initials}</p>
          </div>
          <p className="text-gray-600 font-semibold">{data?.cooperativeName}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
