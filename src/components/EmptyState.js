import React from "react";

import { IoIosNotificationsOutline } from "react-icons/io";

const EmptyState = ({ title, buttonTitle, icon, subTitle, onClick }) => {
  return (
    <div className="flex flex-col bg-white p-4 justify-center items-center  w-full h-screen">
      <div className="flex items-center justify-center flex-none w-16 h-16  bg-gray-200 rounded-full">
        {icon}
      </div>
      <div className="text-center">
        <h1 className="font-semibold text-lg my-3">{title}</h1>
        <p className=" font-normal text-base my-5">{subTitle} </p>
        <button
          className="bg-dark-purple text-white uppercase px-10 py-2 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out"
          onClick={onClick}>
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
