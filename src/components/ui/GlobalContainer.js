import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const GlobalContainer = ({
  pageName,
  buttonTitle,
  handleAddModal,
  backButton,
}) => {
  return (
    <div
      className="flex space-x-3 mx-6 mt-6  justify-between
      bg-white rounded-t-lg border border-gray-200 p-2">
      <div className="p-2 flex space-x-4 items-center">
        {backButton && (
          <MdOutlineKeyboardBackspace
            onClick={handleAddModal}
            className="text-gray-500  text-2xl cursor-pointer"
          />
        )}
        <p className="text-base font-normal mb-2 text-[rgb(29,2,24)] ">
          {pageName}
        </p>
      </div>
      {buttonTitle && (
        <button
          onClick={handleAddModal}
          className="bg-white border border-dark-purple text-dark-purple px-8  rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out">
          {buttonTitle}
        </button>
      )}
    </div>
  );
};

export default GlobalContainer;
