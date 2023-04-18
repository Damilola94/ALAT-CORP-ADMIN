import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useMutation } from "react-query";

import handleFetch from "@/services/api/handleFetch";
import notification from "@/utilities/notification";

const ChangePin = ({ changePinHandler, changePinModal }) => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [confirmedpwdError, setConfirmedpwdError] = useState(null);

  const onChangePin = (event) => {
    setPin(event.target.value);
    setButtonDisabled(!(event.target.value && confirmPin));
  };

  const onChangeConfirmPin = (event) => {
    setConfirmPin(event.target.value);
    setButtonDisabled(!(pin && event.target.value));
  };

  const validateConfirmedPwd = () => {
    if (pin !== confirmPin) {
      setConfirmedpwdError("Pin mismatch");
    } else {
      setConfirmedpwdError(null);
    }
  };

  const changePinMutation = useMutation(handleFetch, {
    onSuccess: (res) => {
      if (res?.statusCode === 201) {
        changePinHandler();
        notification({
          title: "Pin Set",
          message: "Your pin is set",
          type: "success",
        });
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

  const handleChangePin = (e) => {
    e.preventDefault();
    if (pin.length < 0) {
      notification({
        title: "Form Error",
        message: "Please, enter a 4 digit pin",
        type: "danger",
      });
      return;
    }
    changePinMutation.mutate({
      endpoint: "transactions",
      extra: "create-pin",
      method: "POST",
      auth: true,
      body: { pin, confirmPin: pin },
    });
  };

  const { isLoading } = changePinMutation;

  return (
    <>
      {changePinModal ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => changePinHandler()}
            ></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-sm mx-auto bg-white shadow-lg  flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8">
                        <h2 className="text-2xl font-bold w-full text-[#333333]">
                          Set Transaction Pin
                        </h2>
                        <div onClick={() => changePinHandler()}>
                          <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="w-full">
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Enter Pin
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                type="password"
                                name="password"
                                value={pin}
                                onChange={onChangePin}
                                placeholder="Password"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex  w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Confirm Pin
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                type="password"
                                name="confirmpassword"
                                value={confirmPin}
                                onChange={onChangeConfirmPin}
                                onBlur={validateConfirmedPwd}
                                placeholder="Password"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                        {confirmedpwdError && (
                          <div className="text-red-800 text-xs font-bold">
                            {confirmedpwdError}
                          </div>
                        )}
                      </div>

                      <div className="container flex justify-end mt-8 space-x-4">
                        <button
                          onClick={() => changePinHandler()}
                          className={`bg-white text-dark-purple py- px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-dark-purple text-white px-12 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                          type="submit"
                          disabled={buttonDisabled}
                          onClick={handleChangePin}
                        >
                          {isLoading ? "Loading" : "Save"}
                        </button>
                      </div>
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

export default ChangePin;
