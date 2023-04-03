import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";

const GeneralSettings = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-5/6 p-6">
        <div>
          <h1 className="font-bold text-xl mb-3">General Settings</h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor asset ifish juxtereb fghdh hdh hfed
          </p>
        </div>
        <div>
          <h2 className="text-dark-purple text-lg font-semibold">
            Company Profile
          </h2>
          <p className="mt-20 font-semibold text-xs mb-2">Company Logo</p>
          <div className="relative">
            <div className="flex items-center justify-center flex-none w-24 h-24 bg-gray-100 rounded-full mr-2 text-white"></div>
            <BsCamera className="text-3xl text-[#808080] border-r-gray-500 border-l-gray-500 absolute left-14 bottom-1" />
          </div>
        </div>
        <div>
          <div className="mt-6">
            <label className="text-gray-500 font-semibold w-full">
              Company Name
            </label>
            <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
              <input
                type="text"
                disabled
                name="companyName"
                placeholder="ABC Cooperatives"
                className="bg-input-fill outline-none text-sm flex-1 h-8"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="text-gray-500 font-semibold w-full">
              Company Phone Number
            </label>
            <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
              <input
                type="text"
                disabled
                name="companyName"
                placeholder="07080000040"
                className="bg-input-fill outline-none text-sm flex-1 h-8"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="text-gray-500 font-semibold w-full">
              Email Address
            </label>
            <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
              <input
                type="text"
                disabled
                name="companyName"
                placeholder="abccooperatives@gmail.com"
                className="bg-input-fill outline-none text-sm flex-1 h-8"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="text-gray-500 font-semibold w-full">
              Business Address
            </label>
            <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
              <input
                type="text"
                disabled
                name="companyName"
                placeholder="12 Marina Rd."
                className="bg-input-fill outline-none text-sm flex-1 h-8"
              />
            </div>
          </div>
          <div className="flex space-x-4 w-full">
            <div className="mt-6 w-full">
              <label className="text-gray-500 font-semibold ">Country</label>
              <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                <input
                  type="text"
                  disabled
                  name="country"
                  placeholder="Nigeria"
                  className="bg-input-fill outline-none text-sm flex-1 h-8"
                />
              </div>
            </div>
            <div className="mt-6 w-full">
              <label className="text-gray-500 font-semibold ">State</label>
              <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                <input
                  type="text"
                  disabled
                  name="companyName"
                  placeholder="Lagos"
                  className="bg-input-fill outline-none text-sm flex-1 h-8"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label className="text-gray-500 font-semibold w-full">
              Date of Incoporations
            </label>
            <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
              <input
                type="text"
                disabled
                name="companyName"
                placeholder="12th January 2000"
                className="bg-input-fill outline-none text-sm flex-1 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSettings;
