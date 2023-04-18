import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useMutation,useQueryClient } from "react-query";

import notification from "../../utilities/notification";
import handleFetch from "@/services/api/handleFetch";

const AddBeneficiaryModal = ({ handleAddModal, addModal }) => {
  const queryClient = useQueryClient();
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
    setButtonDisabled(!(accountName && bankName && event.target.value));
  };

  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value);
    setButtonDisabled(!(accountNumber && bankName && event.target.value));
  };

  const handleBankChange = (event) => {
    setBankName(event.target.value);
    setButtonDisabled(!(accountNumber && accountName && event.target.value));
  };

  const savedMutation = useMutation(handleFetch, {
    onSuccess: (res) => {
      if (res?.statusCode === 201) {
        notification({
          title: "Saved Beneficiary",
          message: `You have succesfully saved ${accountName} to your beneficiary directory`,
          type: "success",
        });
        handleAddModal();
        queryClient.invalidateQueries(['beneficiaries']);
      }
    },
    onError: (err) => {
      notification({
        title: "Error",
        message: err?.toString() || "Something went wrong.",
        type: "danger",
      });
    },
  });

  const handleSavedValue = (e) => {
    e.preventDefault();
    if (accountName === "" || accountNumber === "" || bankName  === "") {
      notification({
        title: "Form Error",
        message: "All fields are required",
        type: "danger",
      });
      return;
    }
    savedMutation.mutate({
      endpoint: "Transactions",
      extra: "create-beneficiary",
      method: "POST",
      auth: true,
      body: {
        bankName,
        accountNumber,
        accountName
      },
    });
  };

  const { isLoading } = savedMutation;

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
                                onChange={handleBankChange}
                                value={bankName}
                                name="bank"
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
                                onChange={handleAccountNameChange}
                                value={accountName}
                                name="accountName"
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
                                onChange={handleAccountNumberChange}
                                value={accountNumber}
                                name="accountNumber"
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
                          className="bg-dark-purple text-white px-12 py-2 rounded-lg font-semibold  translate duration-200 ease-in-out"
                          type="submit"
                          disabled={buttonDisabled}
                          onClick={handleSavedValue}
                        >
                       {isLoading ? "Loading" :   "Save"}
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
