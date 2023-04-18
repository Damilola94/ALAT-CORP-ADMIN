import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { StepperContext } from "@/contexts/StepperContex";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import TransferDetails from "./SingleTransferSteps/TransferDetails";
import ConfirmDetails from "./SingleTransferSteps/ConfirmDetails";
import CompleteTransaction from "./SingleTransferSteps/CompleteTransaction";
import BulkTransferDetails from "./BulkTransferSteps/BulkTransferDetails";
import BulkConfirmDetails from "./BulkTransferSteps/BulkConfirmDetails";
import BulkCompleteTransaction from "./BulkTransferSteps/BulkCompleteTransaction";
import EditModal from "../Modals/EditModal";
import SuccessModal from "../Modals/SuccessModal";
import { useMutation } from "react-query";
import handleFetch from "@/services/api/handleFetch";
import notification from "@/utilities/notification";
import {onPreviousStep} from "@/redux/transactionSlice"

const StepperUI = () => { 
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState("");
  const [options, setOptions] = useState(1);
  const [editModal, setEditModal] = useState(false);
  const [editModalId, setEditModalId] = useState("");
  const [content, setContent] = useState("");
  const steps = ["Transfer Details", "Confirm Details", "Complete Transaction"];

  const handleEditModal = (value) => {
    setEditModal(!editModal);
    setEditModalId(value);
  };

  const displaySingleTransferSteps = (step) => {
    switch (step) {
      case 1:
        return <TransferDetails handleEditModal={handleEditModal} />;
      case 2:
        return <ConfirmDetails />;
      case 3:
        return <CompleteTransaction />;
      default:
    }
  };

  const displayBulkTransferSteps = (step) => {
    switch (step) {
      case 1:
        return <BulkTransferDetails handleEditModal={handleEditModal} />;
      case 2:
        return <BulkConfirmDetails />;
      case 3:
        return <BulkCompleteTransaction />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    dispatch(onPreviousStep(true))
  };

  const handleLastClick = () => {
    setModal(!modal);
    setUserData(" ")
  };

  const fundTransferMutation = useMutation(handleFetch, {
    onSuccess: (res) => {
      if (res?.statusCode === 201) {
        setContent(res.data.data[0])
        handleLastClick()
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

  const handleFundTransfer = () => {
    if (userData == null) {
      notification({
        title: "Form Error",
        message: "Please fill all fields",
        type: "danger",
      });
      return;
    }
    fundTransferMutation.mutate({
      endpoint: "transactions",
      extra: "fund-transfer",
      method: "POST",
      auth: true,
      body: {
        bankDetailsDtos: [
          {
            bankName: userData["Bank Name"],
            accountName: userData["Account Name"],
            description: userData?.Description,
            accountNumber: userData["Account Number"],
            amount: parseInt(userData.Amount),
            saveBeneficiary: false,
          },
        ],
        pin: userData?.enterpin,
      },
    });
  };

  const { isLoading, isSuccess } = fundTransferMutation;

  return (
    <>
      {editModal && (
        <EditModal
          handleEditModal={handleEditModal}
          editModal={editModal}
          editModalId={editModalId}
        />
      )}
     {modal && (
        <SuccessModal handleLastClick={handleLastClick} modal={modal} content={content}/>
      )}
      <div className="bg-white">
        <div className="p-5">
          <p className="font-semibold text-lg mb-6 text-[rgb(29,2,24)] ">
            Select transaction type
          </p>
          <div className="space-x-4 flex">
            <div
              className={`bg-white border ${
                options === 1
                  ? "border-dark-purple text-dark-purple"
                  : "border-gray-400 text-gray-400"
              }  px-4 py-2 rounded-md font-semibold cursor-pointer flex  text-base`}
            >
              <input
                type="radio"
                className={`${
                  options === 1 ? "accent-dark-purple" : "accent-gray-400"
                }`}
                onClick={() => setOptions(1)}
              />
              <h3 className="ml-3">Send to Individual/Multiple</h3>
            </div>
            <div
              className={`border text-gray-400 ${
                options === 2
                  ? "border-dark-purple text-dark-purple"
                  : "border-gray-400"
              } px-4 py-2 rounded-md font-semibold cursor-pointer flex text-base`}
            >
              <input
                type="radio"
                className={`${
                  options === 2 ? "accent-dark-purple" : "accent-gray-400"
                }`}
                onClick={() => setOptions(2)}
              />
              <h3 className={`ml-3 ${options === 2 ? "text-dark-purple" : ""}`}>
                Bulk Transfer
              </h3>
            </div>
          </div>
        </div>
        {options === 1 ? (
          <>
            {/* Stepper */}
            <div className="container horizontal mt-5 ">
              <div className="flex -mx-6">
                <div className="p-10 w-full bg-[#FAFAFA]">
                  <div className="w-4/6">
                    <Stepper steps={steps} currentStep={currentStep} />
                  </div>
                </div>
              </div>
              {/*Display Components */}
              <div className="flex w-full">
                <div className="my-5 p-10 w-full bg-white">
                  <StepperContext.Provider
                    value={{
                      userData,
                      setUserData,
                    }}
                  >
                    {displaySingleTransferSteps(currentStep)}
                  </StepperContext.Provider>
                </div>
              </div>
            </div>
            {/* Navigation controls */}
            <div className="">
              <StepperControl
                handleClick={handleClick}
                handleLastClick={handleFundTransfer}
                currentStep={currentStep}
                steps={steps}
              />
            </div>
            {/* Navigation controls */}
          </>
        ) : (
          <>
            {/* Stepper */}
            <div className="container horizontal mt-5 ">
              <div className="flex -mx-6">
                <div className="p-10 w-full bg-[#FAFAFA]">
                  <div className="w-4/6">
                    <Stepper steps={steps} currentStep={currentStep} />
                  </div>
                </div>
              </div>
              {/*Display Components */}
              <div className="flex w-full">
                <div className="my-5 p-10 w-full bg-white">
                  <StepperContext.Provider
                    value={{
                      userData,
                      setUserData,
                    }}
                  >
                    {displayBulkTransferSteps(currentStep)}
                  </StepperContext.Provider>
                </div>
              </div>
            </div>
            {/* Navigation controls */}
            <div className="">
              <StepperControl
                handleClick={handleClick}
                handleLastClick={handleFundTransfer}
                currentStep={currentStep}
                steps={steps}
              />
            </div>
            {/* Navigation controls */}
          </>
        )}
      </div>
    </>
  );
};

export default StepperUI;
