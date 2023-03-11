import React, { useState } from "react";
import { StepperContext } from "@/contexts/StepperContex";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import TransferDetails from "./steps/TransferDetails";
import ConfirmDetails from "./steps/ConfirmDetails";
import CompleteTransaction from "./steps/CompleteTransaction";
import EditModal from "../Modals/EditModal";
import SuccessModal from "../Modals/SuccessModal";

const StepperUI = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState("");
  const [options, setOptions] = useState(1);
  const [editModal, setEditModal] = useState(false);
  const [editModalId, setEditModalId] = useState("")
  const steps = ["Transfer Details", "Confirm Details", "Complete Transaction"];

  const handleEditModal = (value) => {
    setEditModal(!editModal);
    setEditModalId(value)
  };

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return (
          <TransferDetails
            handleEditModal={handleEditModal}
          />
        );
      case 2:
        return <ConfirmDetails/>;
      case 3:
        return <CompleteTransaction />;
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
          editModalId={editModalId}
        />
      )}
      {modal && (
        <SuccessModal
        handleLastClick={handleLastClick}
        modal={modal}
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
                     }}>
                    {displaySteps(currentStep)}
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
          <div>
            <h1>Bulk Transfer</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default StepperUI;
