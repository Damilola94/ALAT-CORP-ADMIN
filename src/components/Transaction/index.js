import React, { useState } from "react";
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
import BulkTransfer from "./TransferMethod/BulkTransfer";

const StepperUI = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [options, setOptions] = useState(1);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState("");

  const steps = ["Transfer Details", "Confirm Details", "Complete Transaction"];

  const handleEditModal = () => {
    setEditModal(!editModal);
  };

  const handleEditData = (data) => {
    setEditData(data);
  };

  const displaySingleTransferSteps = (step) => {
    switch (step) {
      case 1:
        return (
          <TransferDetails
            handleEditModal={handleEditModal}
            handleEditData={handleEditData}
          />
        );
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
        return (
          <BulkTransferDetails
            handleEditModal={handleEditModal}
            handleEditData={handleEditData}
          />
        );
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
  };

  const handleLastClick = () => {
    setModal(!modal);
  };

  return (
    <>
      {editModal && (
        <EditModal
          handleEditModal={handleEditModal}
          editModal={editModal}
          editData={editData}
        />
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
              }  px-4 py-2 rounded-md font-semibold cursor-pointer flex  text-base`}>
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
              } px-4 py-2 rounded-md font-semibold cursor-pointer flex text-base`}>
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
                      finalData,
                      setFinalData,
                    }}>
                    {displaySingleTransferSteps(currentStep)}
                  </StepperContext.Provider>
                </div>
              </div>
            </div>
            {/* Navigation controls */}
            <div className="">
              <StepperControl
                handleClick={handleClick}
                handleLastClick={handleLastClick}
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
                      finalData,
                      setFinalData,
                    }}>
                    {displayBulkTransferSteps(currentStep)}
                  </StepperContext.Provider>
                </div>
              </div>
            </div>
            {/* Navigation controls */}
            <div className="">
              <StepperControl
                handleClick={handleClick}
                handleLastClick={handleLastClick}
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
