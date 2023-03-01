import React from "react";

import GlobalContainer from "./ui/GlobalContainer";


const TransactionContainer = () => {
  return (
    <div className="h-fit">
    <GlobalContainer pageName= {"Transaction History"}/>
   <div className="p-10 mx-6 bg-white rounded-b-lg border border-gray-200">
    </div>
    </div>
  );
};

export default TransactionContainer;
