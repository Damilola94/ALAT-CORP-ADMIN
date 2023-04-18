import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";

import handleFetch from "@/services/api/handleFetch";
import notification from "@/utilities/notification";
import { adminRole } from "@/redux/transactionSlice";

const TransactionPinModal = ({ approveModal, onClick }) => {
  const queryClient = useQueryClient();
  const { status, id: statusId } = useSelector(adminRole);
  const [pin, setPin] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handlePinChange = (event) => {
    setPin(event.target.value);
    setButtonDisabled(!event.target.value);
  };

  const approveMutation = useMutation(handleFetch, {
    onSuccess: (res) => {
      if (res?.statusCode === 200) {
        onClick()
        notification({
          title: "Transaction Verified",
          message: "You have succesfully verified the transaction",
          type: "success",
        });
        queryClient.invalidateQueries(['transactions']);
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

  const handleAction = () => {
    if (!pin) {
      notification({
        title: "Error",
        message: "Please, fill in your pin",
        type: "danger",
      });
      return;
    }
    if(status === "verify"){
      approveMutation.mutate({
        endpoint: "transactions",
        extra: "verify-transaction",
        method: "PUT",
        auth: true,
        body: { transactionId:  statusId,  isVerified: true , pin, comment: "" },
      });
    } 
    if (status === "approve"){
      approveMutation.mutate({
        endpoint: "transactions",
        extra: "approve-transaction",
        method: "PUT",
        auth: true,
        body: { transactionId: statusId,  isApproved: true , pin, comment: "" },
      });
    }
  };

  const { isLoading } = approveMutation;

  return (
    <>
      {approveModal ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => onClick()}
            ></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-sm mx-auto bg-white shadow-lg  flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8">
                        <h2 className="text-2xl font-bold w-full text-[#333333]">
                          Transaction Pin
                        </h2>
                        <div onClick={() => onClick()}>
                          <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                        </div>
                      </div>
                      <div className="px-8 pb-4 -mt-2 text-xs font-medium">
                        <p>
                          Enter your transaction pin as an{" "}
                          {status === "verify" ? "Verifier" : " Approver"}
                        </p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="w-full">
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Transaction Pin
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                type="password"
                                name="password"
                                className="bg-input-fill outline-none text-sm flex-1"
                                value={pin}
                                onChange={handlePinChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container flex justify-end mt-8 space-x-4">
                        <button
                          onClick={() => onClick()}
                          className={`bg-white text-dark-purple py- px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}
                        >
                          Cancel
                        </button>
                        {status === "verify" && (
                          <button
                            onClick={handleAction}
                            disabled={buttonDisabled}
                            className="bg-dark-purple text-white px-12 py-2 rounded-lg font-semibold translate duration-200 ease-in-out"
                          >
                            {isLoading ? "Verifying" : "Verify"}
                          </button>
                        )}
                        {status === "approve" && (
                          <button
                            disabled={buttonDisabled}
                            onClick={handleAction}
                            className="bg-dark-purple text-white px-12 py-2 rounded-lg font-semibold translate duration-200 ease-in-out"
                          >
                            {isLoading ? "Approving" : "Approve"}
                          </button>
                        )}
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

export default TransactionPinModal;
