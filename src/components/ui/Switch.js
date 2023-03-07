import React from "react";

const Switch = () => {
  return (
    <>
      <label className="relative inline-flex items-center  mt-4">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-input-fill dark:peer-focus:ring-dark-purple rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark-purple cursor-pointer"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Add to Beneficiary
        </span>
      </label>
    </>
  );
};

export default Switch;
