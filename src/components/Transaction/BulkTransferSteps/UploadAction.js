import React from "react";
import { IoIosWarning } from "react-icons/io";

const UploadAction = ({ handleUploadModal, handleCancelModal }) => {
  return (
    <div className="flex justify-between items-center w-full my-8">
      <div className="flex items-center">
        <div className="mr-3">
          <IoIosWarning className="text-[#E24D4D] text-3xl" />
        </div>
        <div>
          <h1 className="font-bold text-base">200 Recipients uploaded</h1>
          <p className="text-gray-600">
            Check through and make changes if required
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-dark-purple text-white px-4 py-2 rounded-lg font-semibold cursor-pointer hover:bg-white hover:text-dark-purple hover:border hover:border-dark-purple translate duration-200 ease-in-out"
          onClick={() => handleUploadModal()}>
          Upload another file
        </button>
        <button
          className="bg-white border border-dark-purple text-dark-purple px-4 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out"
          onClick={() => handleCancelModal()}>
          Clear Upload
        </button>
      </div>
    </div>
  );
};

export default UploadAction;
