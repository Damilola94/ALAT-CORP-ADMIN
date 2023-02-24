import { useState } from "react";

const Step1 = ({ steps }) => {
  return (
    <div className="relative">
      <div className="bg-dark-purple w-2/6 h-fit rounded-lg px-6 py-6 text-center absolute bottom-96 right-40 text-white">
        <div>
          {steps[step].content}
          <div className="mt-10 flex justify-between">
            <button
              disabled={step === steps.length - 1}
              onClick={nextStep}
              className="bg-white text-dark-purple p-1 rounded-xl shadow-lg">
              Continue
            </button>
            <div>
              <p>
                {steps[step].count}
                <span> of</span> 5
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-[39px] top-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-dark-purple "></div>
      </div>
    </div>
  );
};

export default Step1;
