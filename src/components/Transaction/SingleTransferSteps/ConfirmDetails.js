import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { StepperContext } from "@/contexts/StepperContex";
import FundTransferTable from "@/components/Tables/Transaction/FundTransferTable";
import { beneficiaryListValue,selectedBeneficiaryListValue } from "@/redux/transactionSlice";

const ConfirmDetails = ({}) => {
  const { userData } = useContext(StepperContext);
  const tableData = useSelector(beneficiaryListValue);
  const selectedData = useSelector(selectedBeneficiaryListValue);

  const sumAmount = tableData.reduce((accumulator, object) => {
    return accumulator + Number(object.Amount);
  }, 0);

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
      {tableData?.length > 0 ? (
        <>
          <div className="flex space-x-5 my-5">
            <div>
              <h1 className="mb-3 text-gray-700">Total Recipients</h1>
              <p className="font-bold">{tableData.length}</p>
            </div>
            <div>
              <h1 className="mb-3 text-gray-700">Total Amount</h1>
              <p className="font-bold">{`₦${sumAmount}`}</p>
            </div>
          </div>
          <FundTransferTable confirmDetails beneficiaryData={tableData} />
        </>
      ) : (
        <div>
          <div className="flex justify-between space-x-16">
            <div className="w-full flex-1 ">
              <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                Bank Name
              </div>
              <h1 className="mb-3 mt-3 font-bold text-base">
                {userData["Bank Name"] || selectedData?.bankName || ""}
              </h1>
            </div>
            <div className="mx-2 w-full flex-1">
              <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                Account Number
              </div>
              <h1 className="mb-3 mt-3 font-bold text-base">
                {userData["Account Number"] ||
                  selectedData?.accountNumber ||
                  ""}
              </h1>
            </div>
          </div>
          <div className="flex justify-between space-x-16">
            <div className="w-full flex-1 ">
              <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                Account Name
              </div>
              <h1 className="mb-3 mt-3 font-bold text-base">
                {userData["Account Name"] || selectedData?.accountName || ""}
              </h1>
            </div>
            <div className="mx-2 w-full flex-1">
              <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                Amount
              </div>
              <h1 className="mb-3 mt-3 font-bold text-base">
                {userData["Amount"] && `₦${userData["Amount"]}`}
              </h1>
            </div>
          </div>
          <div className="flex justify-between space-x-16">
            <div className="w-full flex-1 ">
              <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                Description
              </div>
              <h1 className="mb-3 mt-3 font-bold text-base">
                {userData["Description"]}
              </h1>
            </div>
            <div className=" flex-1"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmDetails;
