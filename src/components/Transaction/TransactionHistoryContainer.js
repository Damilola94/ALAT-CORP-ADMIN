import React from "react";
import Tables from "../Tables/Table";

import GlobalContainer from "../ui/GlobalContainer";

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
