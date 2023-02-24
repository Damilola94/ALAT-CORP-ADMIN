import { useState } from "react";
import { IoIosColorFilter } from "react-icons/io";

const Modal = ({ onClick }) => {
  const [showModal, setShowModal] = useState(true);

  const startTourHandler = () => {
    setShowModal(false);
    onClick();
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}></div>
            <div className="flex items-center min-h-screen">
              <div className="relative w-full max-w-xl mx-auto bg-white shadow-lg flex h-96">
                <div className="sm:flex lg:block w-full">
                  <div className="bg-dark-purple w-full h-2/5 justify-center items-center align-middle flex">
                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                      <IoIosColorFilter className="text-4xl" />
                    </div>
                  </div>
                  <div className="lg:text-center sm:ml-4 sm:text-left m-6 md:text-center">
                    <h4 className="text-2xl font-bold text-black">
                      Welcome to ALAT for Cooperative
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      Lets us show you how to get the most of our platform
                    </p>
                    <div className="items-center gap-2 inline-block mt-8 space-x-4">
                      <button
                        className="mt-2 p-3 flex-1 text-white bg-dark-purple rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={startTourHandler}>
                        Start the tour
                      </button>
                      <button
                        className="mt-2 p-3 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}>
                        No thank you
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

export default Modal;
