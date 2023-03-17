import React, { useContext } from "react";
import { StepperContext } from "@/contexts/StepperContex";

const CompleteTransaction = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-base leading-8 text-gray-500">
          <span className="text-black">
            <strong>Step 3: </strong>
          </span>
          Enter your 4 digit Transaction PIN and 6 digit OTP code sent to your
          Phone
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between space-x-16">
          <div className="w-full flex-1">
            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
              Enter Transaction Pin
            </div>
            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
              <input
                onChange={handleChange}
                value={userData["enterpin"] || ""}
                name="enterpin"
                placeholder="Enter Pin"
                className="bg-input-fill outline-none text-sm flex-1"
              />
            </div>
          </div>
          <div className=" flex-1"></div>
        </div>
        <div className="flex justify-between space-x-16">
          <div className="w-full flex-1">
            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
              Enter OTP
            </div>
            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
              <input
                onChange={handleChange}
                value={userData["otp"] || ""}
                name="otp"
                placeholder="OTP"
                className="bg-input-fill outline-none text-sm flex-1"
              />
            </div>
          </div>
          <div className=" flex-1"></div>
        </div>
        <div
          onClick={() => handleClick()}
          className={`text-dark-purple font-semibold cursor-pointer mt-9`}>
          Resend OTP
        </div>
      </div>
    </div>
  );
};

export default CompleteTransaction;
