import React, { useState } from "react";
import Switch from "@/components/ui/Switch";
import { ImCancelCircle } from "react-icons/im";
import StepperControl from "@/components/Transaction/StepperControl";

const EditModal = ({
  userData,
  setUserData,
  handleEditModal,
  editData,
  editModal,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      {editModal ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleEditModal()}></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-3xl mx-auto bg-white shadow-lg  flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8">
                        <h2 className="text-2xl font-bold w-full text-[#333333]">
                          Edit Receipient
                        </h2>
                        <div>
                          <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="w-full">
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Bank Name
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={editData?.["Bank Name"] || ""}
                                name="Bank Name"
                                placeholder="Select Bank"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                          <div className="mx-2 w-full flex-1">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Account Number
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={editData?.["Account Number"] || ""}
                                name="Account Number"
                                placeholder="Account number"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Account Name
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={editData?.["Account Name"] || ""}
                                name="Account Name"
                                placeholder="Account Name"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                          <div className="mx-2 w-full flex-1">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Amount
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={editData?.["Amount"] || ""}
                                name="Amount"
                                placeholder="Amount"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Description
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={editData?.["Description"] || ""}
                                name="Description"
                                placeholder="e.g dividends"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                          <div className="flex-1"></div>
                        </div>
                      </div>
                      <div className="block mt-7">
                        <Switch />
                      </div>
                      {/* Navigation controls */}
                      <div className="container flex justify-end mt-8 space-x-4">
                        <button
                          onClick={() => handleClick()}
                          className={`bg-white text-dark-purple uppercase py- px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}>
                          Cancel
                        </button>
                        <button
                          onClick={() => {}}
                          className="bg-dark-purple text-white uppercase px-12 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out">
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

export default EditModal;
