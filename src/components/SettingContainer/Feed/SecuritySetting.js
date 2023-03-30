import React, { useState } from "react";
import ChangePin from "../../Modals/ChangePin";

const SecuritySettings = () => {
  const [changePinModal, setChangePinModal] = useState(false);

  const handleChangePin = (value) => {
    setChangePinModal(!changePinModal);
  };
  return (
    <>
      {changePinModal && (
        <ChangePin
          handleChangePin={handleChangePin}
          changePinModal={changePinModal}
        />
      )}
      <div className="h-full flex flex-col justify-between w-5/6 p-6">
        <div>
          <h1 className="font-bold text-xl mb-3">Security Settings</h1>
          <p className="text-gray-500 mb-6">
            Choose type of notifications you want to receive.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-dark-purple text-lg font-semibold">
            Transaction Pin
          </h1>
          <p className="text-gray-500 mb-6">
            Set up transaction pin for your transactions
          </p>
        </div>
        <div className="mt-8">
          <button
            className="border-dark-purple border-2 text-dark-purple px-10 py-2 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out"
            onClick={() => handleChangePin()}>
            Change Transaction Pin
          </button>
        </div>
      </div>
    </>
  );
};

export default SecuritySettings;
