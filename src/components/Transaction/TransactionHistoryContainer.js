import React from "react";

import GlobalContainer from "../ui/GlobalContainer";
import TransactionHistoryTable from "../Tables/TransactionHistoryTable";

const TransactionHistoryContainer = () => {
  return (
    <div className="h-fit mb-6">
      <GlobalContainer pageName={"Transaction History"} />
      <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
        <div className="p-1">
          <TransactionHistoryTable />
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryContainer;
