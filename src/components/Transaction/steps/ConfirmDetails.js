import React, { useContext } from "react";
import { StepperContext } from "@/contexts/StepperContex";

const ConfirmDetails = () => {
  const { userData } = useContext(StepperContext);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-base leading-8 text-gray-500">
          <span className="text-black">
            <strong>Step 2: </strong>
          </span>
          Confirm the details of your transaction
        </h1>
      </div>
      <div className="flex justify-between space-x-16">
        <div className="w-full flex-1 ">
          <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
            Bank Name
          </div>
          <h1 className="mb-3 mt-3 font-bold text-base">
            {userData["bankname"]}
          </h1>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
            Account Number
          </div>
          <h1 className="mb-3 mt-3 font-bold text-base">
            {userData["accountnumber"]}
          </h1>
        </div>
      </div>
      <div className="flex justify-between space-x-16">
        <div className="w-full flex-1 ">
          <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
            Account Name
          </div>
          <h1 className="mb-3 mt-3 font-bold text-base">
            {userData["accountname"]}
          </h1>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
            Amount
          </div>
          <h1 className="mb-3 mt-3 font-bold text-base">
            {userData["amount"] && `₦${userData["amount"]}`}
          </h1>
        </div>
      </div>
      <div className="flex justify-between space-x-16">
        <div className="w-full flex-1 ">
          <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
            Description
          </div>
          <h1 className="mb-3 mt-3 font-bold text-base">
            {userData["description"]}
          </h1>
        </div>
        <div className=" flex-1"></div>
      </div>
    </div>
  );
};

export default ConfirmDetails;
