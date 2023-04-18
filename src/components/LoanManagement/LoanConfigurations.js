import React, { useState } from "react";

import GlobalContainer from "../ui/GlobalContainer";
import ChangeInterestModal from "../Modals/ChangeInterestModal";

const LoanConfigurations = () => {
  const [addModal, setAddModal] = useState(false);

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  return (
    <>
      {addModal && (
        <ChangeInterestModal
          handleAddModal={handleAddModal}
          addModal={addModal}
        />
      )}
      <div className="h-full mb-6">
        <GlobalContainer pageName={"Loan Configurations"} />
        <div className="p-6 h-screen mx-6 bg-white rounded-b-lg mb-6">
          <div className="">
            <div className="">
              <h1 className="text-dark-purple text-xl font-bold">
                Interest Rate
              </h1>
              <p className="text-gray-600 my-4">
                Set interest rate for loans requested by members
              </p>
            </div>
            <div className="mt-6 flex w-3/4 space-x-6">
              <div className="w-4/6">
                <label className="font-semibold w-full">
                  Interest Rate (%)
                </label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="number"
                    name="interestRate"
                    placeholder="1"
                    disabled
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="w-3/6 mt-11">
                <button
                  onClick={() => handleAddModal()}
                  className="border-dark-purple text-dark-purple px-12 py-3 border rounded-lg font-semibold hover:bg-dark-purple hover:text-white cursor-pointer translate duration-200 ease-in-out w-full"
                >
                  Change Interest Rate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanConfigurations;
