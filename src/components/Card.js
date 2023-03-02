import React from "react";

import { BsWallet2 } from "react-icons/bs";

import { BiWallet } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa";

const Style = "text-dark-purple text-2xl";

const arrayIcon = [
  <BiWallet fontSize="small" className={Style} />,
  <BsWallet2 fontSize="small" className={Style} />,
  <BsWallet2 fontSize="small" className={Style} />,
  <FaMoneyCheck fontSize="small" className={Style} />,
  <FaMoneyCheck fontSize="small" className={Style} />,
];

const Card = (props) => {
  var balance = props.balance;
  return (
    <div
      className={`transform hover:scale-110 cursor-pointer transition delay-100 lg:col-span-1 col-span-2 w-full p-4 hover:border-r-0  ${
        props.title !== "TOTAL MEMBERS" ? "border-r-2" : "border-r-0"
      }`}>
      <div className="flex">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FEF5F4] ">
          {arrayIcon[props.icon]}
        </div>
      </div>
      <p className="text-gray-700 mt-5 mb-1 text-xs">{props.title}</p>
      <p className="text-black font-bold text-2xl">
        {props.title !== "TOTAL MEMBERS" ? `₦${balance}` : balance}
      </p>
      <div></div>
    </div>
  );
};

export default Card;
