import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

import { savedBeneficiary, savedBeneficiaryListValue } from "@/redux/beneficiarySlice";
import notification from '../../utilities/notification';

const AddBeneficiaryModal = ({ handleAddModal, addModal }) => {
  const [addData, setAddData] = useState("");
  const dispatch = useDispatch();
  const beneficiaryData = useSelector(savedBeneficiaryListValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });
  };

  const handleSavedValue = () => {
    const serialNumber = beneficiaryData.length + 1
    dispatch(savedBeneficiary([...beneficiaryData, {...addData, "S/N":serialNumber}]))
    notification({
      title: "Saved Beneficiary",
      message: `You have succesfully saved ${addData["ACCOUNT NAME"]} to your beneficiary directory`,
      type: "success",
    });
    handleAddModal()
  }

  return (
    <>
      {addModal ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleAddModal()}
            ></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-md mx-auto bg-white shadow-lg  flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8">
                        <h2 className="text-2xl font-bold w-full text-[#333333]">
                          Add Beneficiaries
                        </h2>
                        <div onClick={() => handleAddModal()}>
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
                                value={addData?.["BANK NAME"] || ""}
                                name="BANK NAME"
                                placeholder="Select Bank"
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
                                value={addData?.["ACCOUNT NAME"] || ""}
                                name="ACCOUNT NAME"
                                placeholder="Account Name"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Account Number
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={addData?.["ACCOUNT NUMBER"] || ""}
                                name="ACCOUNT NUMBER"
                                placeholder="Account number"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container flex justify-end mt-8 space-x-4">
                        <button
                          onClick={() => handleAddModal()}
                          className={`bg-white text-dark-purple py- px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSavedValue()}
                          className="bg-dark-purple text-white px-12 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                        >
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

export default AddBeneficiaryModal;
