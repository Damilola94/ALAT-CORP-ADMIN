import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const DeleteMemberModal = ({ handleDelete, modal }) => {
  return (
    <>
      {modal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleDelete()}
            ></div>
            <div className="flex items-center min-h-screen justify-center ">
              <div className="relative w-96 max-w-xl mx-auto bg-white shadow-lg rounded-lg flex h-96 justify-center items-center">
                <div className="sm:flex lg:block w-full">
                  <div className="lg:text-center sm:ml-4 sm:text-left m-6 md:text-center">
                    <RiErrorWarningLine className="text-[#E24D4D] w-full text-5xl mb-8" />
                    <h2 className="text-xl font-normal mb-12">
                      Are you sure you want to delete this user?
                    </h2>
                    <p className="max-w-xs mt-2 text-[15px] leading-relaxed text-gray-500">
                      This user will loose access to the platform.This user will
                      loose access to the platform.
                    </p>
                    <div className="flex justify-center space-x-2 mt-10 ">
                      <button
                        onClick={() => handleDelete()}
                        className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"  
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDelete()}
                        className="bg-dark-purple text-white px-6 py-2  rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                      >
                        Yes, Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DeleteMemberModal;
