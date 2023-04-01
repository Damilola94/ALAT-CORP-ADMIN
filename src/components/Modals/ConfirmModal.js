import React, { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import UploadModal from "./UploadModal";
import { useDispatch, useSelector } from "react-redux";
import { savedBeneficiary, savedBeneficiaryListValue } from "@/redux/beneficiarySlice";
import notification from "@/utilities/notification";

const ConfirmModal = ({
  handleClick,
  confirmModal,
  subTitle,
  uploadCheck,
  cancelModal,
  deleteId,
}) => {
  const [upload, setUpload] = useState(true);
  const beneficiaryData = useSelector(savedBeneficiaryListValue);
  const dispatch = useDispatch();


  const handleRemove = () => {
    const removedBeneficiary = beneficiaryData.filter(
      (item) => item["S/N"] !== deleteId["S/N"]
    );
    dispatch(savedBeneficiary(removedBeneficiary))
    notification({
      title: "Deleted Beneficiary",
      message: `You have succesfully deleted ${deleteId["ACCOUNT NAME"]} from your beneficiary directory`,
      type: "danger",
    });
    handleClick()
  };

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
                        onClick={() => handleClick()}
                        className="bg-dark-purple text-white px-3 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                      >
                        Yes, I’m sure
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
                        onClick={() => handleRemove()}
                        className="bg-dark-purple text-white px-3 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                      >
                        Yes, I’m sure
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
