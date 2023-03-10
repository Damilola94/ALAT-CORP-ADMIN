import React, { useContext } from "react";
import { StepperContext } from "@/contexts/StepperContex";
import Switch from "@/components/ui/Switch";
import { AiOutlinePlusCircle } from "react-icons/ai";


const Account = ({handleAddMore}) => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-base leading-8 text-gray-500">
          <span className="text-black">
            <strong>Step 1: </strong>
          </span>
          Enter the details of your transaction
        </h1>
        <h1 className="font-bold text-dark-purple my-10">Choose Beneficiary</h1>
      </div>
      <div className="flex justify-between space-x-16">
        <div className="w-full flex-1 ">
          <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
            Bank Name
          </div>
          <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
            <input
              onChange={handleChange}
              value={userData["bankname"] || ""}
              name="bankname"
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
              value={userData["accountnumber"] || ""}
              name="accountnumber"
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
              value={userData["accountname"] || ""}
              name="accountname"
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
              value={userData["amount"] || ""}
              name="amount"
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
              value={userData["description"] || ""}
              name="description"
              placeholder="e.g dividends"
              className="bg-input-fill outline-none text-sm flex-1"
            />
          </div>
        </div>
        <div className=" flex-1"></div>
      </div>
      <Switch />
      <div className="flex justify-center bg-light-purple text-dark-purple uppercase mt-7 p-2 rounded-lg font-bold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out w-2/6 items-center space-x-4">
      <AiOutlinePlusCircle/>
      <button
        onClick={() =>
          handleAddMore(userData)
        }
       >
         Add More
      </button>
      </div>
    </div>
  );
};

export default Account;
