import React, { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { useMutation,useQueryClient } from "react-query";

import UploadModal from "./UploadModal";
import notification from "@/utilities/notification";
import handleFetch from "@/services/api/handleFetch";

const ConfirmModal = ({
  handleClick,
  confirmModal,
  subTitle,
  uploadCheck,
  cancelModal,
  deleteId,
}) => {
  const [upload, setUpload] = useState(true);
  const queryClient = useQueryClient();

  const onClickModal = () => {
    setUpload(!upload);
    handleClick();
  };

  const deleteMutation = useMutation(handleFetch, {
    onSuccess: (res) => {
      if (res?.statusCode === 200) {
        notification({
          title: "Deleted Beneficiary",
          message: `You have succesfully deleted ${deleteId?.accountName} from your beneficiary directory`,
          type: "danger",
        });
        handleClick();
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

  const handleRemove = (e) => {
    e.preventDefault();
    if (deleteId?.id === null) {
      notification({
        title: "Error",
        message: "Please try again",
        type: "danger",
      });
      return;
    }
    deleteMutation.mutate({
      endpoint: "Transactions",
      extra: "delete-beneficiary",
      method: "DELETE",
      pQuery: { id: deleteId?.id },
      auth: true,
    });
  };

  const { isLoading } = deleteMutation;

  return (
    <>
      {cancelModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleClick()}
            ></div>
            <div className="flex items-center min-h-screen justify-center ">
              <div className="relative w-96 max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 ">
                <div
                  className="flex w-full ml-auto justify-between"
                  onClick={() => handleClick()}
                >
                  <div></div>
                  <div>
                    <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                  </div>
                </div>
                <div className="sm:flex lg:block w-full justify-center">
                  <div className="lg:text-center sm:ml-4 sm:text-left m-6 md:text-center">
                    <RiErrorWarningLine className="text-gray-500 w-full text-4xl mb-8" />
                    <h2 className="text-sm mb-8 text-[#6B7280]">{subTitle}</h2>
                    <div className="container flex  justify-center mt-8 space-x-4">
                      <button
                        type="submit"
                        onClick={() => handleClick()}
                        className="bg-dark-purple text-white px-3 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                      >
                        {isLoading ? "Loading" : "Yes, I’m sure"}
                      </button>
                      <button
                        onClick={() => handleClick()}
                        className={`bg-white text-dark-purple py-2 px-3 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}
                      >
                        No, cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {confirmModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleClick()}
            ></div>
            <div className="flex items-center min-h-screen justify-center ">
              <div className="relative w-96 max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 ">
                <div
                  className="flex w-full ml-auto justify-between"
                  onClick={() => handleClick()}
                >
                  <div></div>
                  <div>
                    <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                  </div>
                </div>
                <div className="sm:flex lg:block w-full justify-center">
                  <div className="lg:text-center sm:ml-4 sm:text-left m-6 md:text-center">
                    <RiErrorWarningLine className="text-gray-500 w-full text-4xl mb-8" />
                    <h2 className="text-sm mb-8 text-[#6B7280]">{subTitle}</h2>
                    <div className="container flex  justify-center mt-8 space-x-4">
                      <button
                        type="submit"
                        onClick={handleRemove}
                        className="bg-dark-purple text-white px-3 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                      >
                        {isLoading ? "Loading" : "Yes, I’m sure"}
                      </button>
                      <button
                        onClick={() => handleClick()}
                        className={`bg-white text-dark-purple py-2 px-3 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}
                      >
                        No, cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {upload && confirmModal && uploadCheck && (
        <UploadModal upload={upload} onClickModal={onClickModal} />
      )}
    </>
  );
};

export default ConfirmModal;
