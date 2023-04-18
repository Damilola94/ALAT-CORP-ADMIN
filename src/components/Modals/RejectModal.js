import React, { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useSelector } from "react-redux";

import handleFetch from "@/services/api/handleFetch";
import { adminRole } from "@/redux/transactionSlice";

const RejectModal = ({ onClick, modal }) => {
  const queryClient = useQueryClient();
  const { status, id: statusId } = useSelector(adminRole);
  const [pin, setPin] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleCommentChange = (event) => {
    setPin(event.target.value);
    setButtonDisabled(!event.target.value);
  };

  const approveMutation = useMutation(handleFetch, {
    onSuccess: (res) => {
      if (res?.statusCode === 200) {
        onClick();
        notification({
          title: "Transaction Verified",
          message: "You have succesfully verified the transaction",
          type: "success",
        });
        queryClient.invalidateQueries(["transactions"]);
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
        message: "Please, fill in your comment",
        type: "danger",
      });
      return;
    }
    if (status === "verify") {
      approveMutation.mutate({
        endpoint: "transactions",
        extra: "verify-transaction",
        method: "PUT",
        auth: true,
        body: { transactionId: statusId, isVerified: true, pin, comment: "" },
      });
    }
    if (status === "approve") {
      approveMutation.mutate({
        endpoint: "transactions",
        extra: "approve-transaction",
        method: "PUT",
        auth: true,
        body: { transactionId: statusId, isApproved: true, pin, comment: "" },
      });
    }
  };

  const { isLoading } = approveMutation;

  return (
    <>
      {modal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => onClick()}
            ></div>
            <div className="flex items-center min-h-screen">
              <div className="relative w-full max-w-2xl rounded-lg mx-auto bg-white shadow-2xl flex h-80">
                <div className="sm:flex lg:block w-full">
                  <div className="lg:text-left sm:ml-4 sm:text-left m-6 md:text-center">
                    <h4 className="text-xl font-bold text-black">
                      Reason for Rejection
                    </h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-gray-400 mb-6">
                      Please enter your reason for rejecting this transaction
                    </p>
                    <div>
                      <textarea
                        id="message"
                        rows="4"
                        onChange={handleCommentChange}
                        className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-dark-purple focus:border-dark-purple"
                        placeholder="Add comment..."
                      />
                    </div>
                    <div className="mt-6 gap-3 space-x-3">
                      <button
                        disabled={buttonDisabled}
                        className="mt-1 p-2 flex-1 px-4 text-white bg-dark-purple rounded-md outline-none ring-offset-2 focus:ring-2"
                        onClick={ handleAction} 
                      >
                        {isLoading
                          ? "Rejecting Transaction"
                          : "Reject Transaction"}
                      </button>
                      <button
                        className="mt-1 p-2 flex-1 text-black bg-gray-300  rounded-md outline-none ring-offset-2 focus:ring-2"
                        onClick={onClick}
                      >
                        Cancel
                      </button>
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

export default RejectModal;
