import React, { useState } from "react";
// import Chat from "./Chat";
import { BiEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const Chat = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="w-1/3 border-r-2 border-r-gray-300 -my-3 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-dark-purple font-bold text-xl">Messages </h1>
          <BiEdit className="text-gray-500 text-xl cursor-pointer" />
        </div>
        <div className="p-2 flex rounded-md border mt-6 border-input-outline bg-input-fill  h-9 items-center">
          <BsSearch className="text-gray-400 text-sm" />
          <input
            className="bg-input-fill outline-none text-sm flex-1 ml-2 w-5/6"
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
