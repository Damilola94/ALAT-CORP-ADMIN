import React from "react";

const GlobalContainer = ({ pageName }) => {
  return (
    <div
      className="flex space-x-3 mx-6 mt-6 flex-col 
      bg-white rounded-t-lg border border-gray-200">
      <div className="border-b p-2 border-gray-200  ">
        <p className="text-base font-normal mb-2 text-[rgb(29,2,24)] ">{pageName}</p>
      </div>
    </div>
  )
}

export default GlobalContainer;
