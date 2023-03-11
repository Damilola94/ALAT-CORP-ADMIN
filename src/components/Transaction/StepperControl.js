import React from "react";

const StepperControl = ({
  handleClick,
  currentStep,
  steps,
  handleLastClick,
}) => {
  return (
    <div className="container flex justify-end mt-4 space-x-4">
      {/*back button*/}
      {currentStep !== 1 && (
        <button
          type="button"
          onClick={() => handleClick()}
          className={`bg-white text-dark-purple uppercase py- px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}>
          Previous
        </button>
      )}
      <button
        type="button"
        onClick={() =>
          currentStep === steps.length ? handleLastClick() : handleClick("next")
        }
        className="bg-light-purple text-[#1D0218] uppercase px-12 py-2 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out">
        {currentStep === steps.length ? "Transfer Funds" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
