import React from "react";
import Tables from "./Tables/table";

import GlobalContainer from "./ui/GlobalContainer";

const TransactionContainer = () => {
  return (
    <div className="h-fit">
      <GlobalContainer pageName={"Transaction History"} />
      <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
        <div className="p-1">
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default TransactionContainer;
