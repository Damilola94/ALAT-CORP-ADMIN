import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";
import ChangePassword from "../../Modals/ChangePassword";

const AccountInformation = () => {
  const [changePasswordModal, setChangePasswordModal] = useState(false);

  const handleChangePassword = (value) => {
    setChangePasswordModal(!changePasswordModal);
  };

  return (
    <>
      {changePasswordModal && (
        <ChangePassword
          handleChangePassword={handleChangePassword}
          changePasswordModal={changePasswordModal}
        />
      )}
      <div className="h-full flex flex-col justify-between w-5/6 p-6">
        <div>
          <h1 className="font-bold text-xl mb-3">Account Settings</h1>
          <p className="text-gray-500 mb-6">
            View and update your account information here
          </p>
        </div>
        <div>
          <h2 className="text-dark-purple text-lg font-semibold">
            Account Information
          </h2>
          <p className="mt-20 font-semibold text-xs mb-2">Profile</p>
          <div className="relative">
            <div className="flex items-center justify-center flex-none w-24 h-24 bg-gray-100 rounded-full mr-2 text-white"></div>
            <BsCamera className="text-3xl text-[#808080] border-r-gray-500 border-l-gray-500 absolute left-14 bottom-1" />
          </div>
        </div>
        <div>
          <div className="flex space-x-4 w-full">
            <div className="mt-6 w-full">
              <label className="text-gray-500 font-semibold ">First Name</label>
              <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                <input
                  type="text"
                  disabled
                  name="fName"
                  placeholder="Lapo"
                  className="bg-input-fill outline-none text-sm flex-1 h-8"
                />
              </div>
            </div>
            <div className="mt-6 w-full">
              <label className="text-gray-500 font-semibold ">Last Name</label>
              <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                <input
                  type="text"
                  disabled
                  name="lName"
                  placeholder="John"
                  className="bg-input-fill outline-none text-sm flex-1 h-8"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-5 h-8" />
          <div>
            <div>
              <h2 className="text-dark-purple text-lg font-semibold mb-5">
                Password
              </h2>
              <p className="text-gray-500 mb-6">
                Change your account password often to prevent unauthorized
                access to your account.
              </p>
            </div>
            <div className="flex space-x-4 items-center justify-end">
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold">Password</label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="password"
                    name="fName"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="mt-11 w-full ml-14">
                <button
                  className="border-dark-purple border-2 text-dark-purple px-7 py-3 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out"
                  onClick={() => handleChangePassword()}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInformation;
