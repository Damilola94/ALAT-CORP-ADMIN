import React from "react";

const DashboardContainerUI = ({ children }) => {
  return (
    <div
      className="flex space-x-3 m-6 flex-col 
      bg-white rounded-xl border border-gray-200">
      <div className="border-b p-3 border-gray-200  ">
        <p className="text-2xl font-bold mb-4 text-[#650520] ">
          Dashboard Overview
        </p>
      </div>
      {children}
    </div>
  );
};

export default DashboardContainerUI;
