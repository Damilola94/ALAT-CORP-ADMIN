import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const InviteSuccessModal = ({ handleSuccesInvite, modal }) => {
  return (
    <>
      {modal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleSuccesInvite()}></div>
            <div className="flex items-center min-h-screen justify-center ">
              <div className="relative w-96 max-w-xl mx-auto bg-white shadow-lg rounded-lg flex h-96 justify-center items-center">
                <div className="sm:flex lg:block w-full">
                  <div className="lg:text-center sm:ml-4 sm:text-left m-6 md:text-center">
                    <IoMdCheckmarkCircleOutline className="text-green-500 w-full text-7xl mb-8" />
                    <h2 className="text-3xl font-bold mb-12 text-dark-purple">
                      Success!
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    Your invitation has been sent successfully 
                    </p>
                    <button
                          onClick={() => handleSuccesInvite()}
                          className="mt-10 bg-dark-purple text-white px-12 py-2 w-full rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                        >
                          Okay
                        </button>
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

export default InviteSuccessModal;
