import React, { useContext, useState } from "react";
import { StepperContext } from "@/contexts/StepperContex";
import Switch from "@/components/ui/Switch";
import { AiOutlinePlusCircle } from "react-icons/ai";
import FundTransferTable from "@/components/Tables/FundTransferTable";

const TransferDetails = ({ handleEditModal, handleEditData }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [moreBeneficiary, setMoreBeneficiary] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAddMore = () => {
    const addMoreData = [];
    addMoreData.push({ ...userData, id: Date.now() });
    setMoreBeneficiary((prevState) => {
      return [...prevState, ...addMoreData];
    });
    handleEditData(userData);
    setUserData("");
  };

  const handleRemove = (value) => {
    const removedBeneficiary = moreBeneficiary.filter(
      (item) => item.id !== value.id
    );
    setMoreBeneficiary(removedBeneficiary);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <div>
          <h1 className="text-base leading-8 text-gray-500 mb-7">
            <span className="text-black">
              <strong>Step 1: </strong>
            </span>
            Enter the details of your transaction
          </h1>
        </div>
        {moreBeneficiary.length > 0 ? (
          <FundTransferTable
            beneficiaryData={moreBeneficiary}
            handleEditModal={handleEditModal}
            handleRemove={handleRemove}
          />
        ) : (
          ""
        )}
        <div className="w-3/4">
          <h1 className="font-bold text-dark-purple my-10">
            Choose Beneficiary
          </h1>
          <div className="flex justify-between space-x-16">
            <div className="w-full flex-1 ">
              <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                Bank Name
              </div>
              <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                <input
                  onChange={handleChange}
                  value={userData["Bank Name"] || ""}
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
                  value={userData["Account Number"] || ""}
                  name="Account Number"
                  placeholder="Account number"
                  className="bg-input-fill outline-none text-sm flex-1"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between space-x-16">
            <div className="w-full flex-1 ">
              <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                Account Name
              </div>
              <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                <input
                  onChange={handleChange}
                  value={userData["Account Name"] || ""}
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
                  value={userData["Amount"] || ""}
                  name="Amount"
                  placeholder="Amount"
                  className="bg-input-fill outline-none text-sm flex-1"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between space-x-16">
            <div className="w-full flex-1 ">
              <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                Description
              </div>
              <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                <input
                  onChange={handleChange}
                  value={userData["Description"] || ""}
                  name="Description"
                  placeholder="e.g dividends"
                  className="bg-input-fill outline-none text-sm flex-1"
                />
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      <div className="block">
        <Switch />
        <span className="flex text-center justify-center bg-light-purple text-dark-purple uppercase mt-7 p-2 rounded-lg font-bold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out items-center space-x-4 w-1/5">
          <AiOutlinePlusCircle />
          <button onClick={() => handleAddMore()}>Add More</button>
        </span>
      </div>
    </div>
  );
};

export default TransferDetails;
