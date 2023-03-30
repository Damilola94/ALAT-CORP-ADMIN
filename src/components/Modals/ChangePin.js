import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";

const ChangePin = ({ handleChangePin, changePinModal }) => {
  const [editData, setEditData] = useState("");

  const handleEditSaved = () => {
    const updateObjectInArray = (arr, updatedObj) => {
      return arr.map((obj) => {
        if (obj["s/n"] === editData["s/n"]) {
          return updatedObj;
        } else {
          return obj;
        }
      });
    };
    const updatedArr = updateObjectInArray(tableData, editData);
    handleChangePin();
  };

  return (
    <>
      {changePinModal ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleChangePin()}></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-sm mx-auto bg-white shadow-lg  flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8">
                        <h2 className="text-2xl font-bold w-full text-[#333333]">
                          Set Transaction Pin
                        </h2>
                        <div onClick={() => handleChangePin()}>
                          <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="w-full">
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Enter Pin
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                type="password"
                                name="password"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex  w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Confirm Pin
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                type="password"
                                name="password"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Navigation controls */}
                      <div className="container flex justify-end mt-8 space-x-4">
                        <button
                          onClick={() => handleChangePin()}
                          className={`bg-white text-dark-purple py- px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}>
                          Cancel
                        </button>
                        <button
                          onClick={() => handleEditSaved()}
                          className="bg-dark-purple text-white px-12 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out">
                          Save
                        </button>
                      </div>
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

export default ChangePin;
