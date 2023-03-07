import React from "react";

import GlobalContainer from "../ui/GlobalContainer";
import Tables from "../Tables/Table";

const TransactionHistoryContainer = () => {
  return (
    <div className="h-fit mb-4">
      <GlobalContainer pageName={"Transaction History"} />
      <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
        <div className="p-1">
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryContainer;
