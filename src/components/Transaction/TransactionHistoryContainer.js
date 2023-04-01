import React from "react";

import Card from "../Cards/Card";
import GlobalContainer from "../ui/GlobalContainer";
import TransactionHistoryTable from "../Tables/Transaction/TransactionHistoryTable";

const TransactionHistoryContainer = () => {
  return (
    <div className="h-fit mb-6">
      <GlobalContainer pageName={"Transaction History"}>
        <div className="grid lg:grid-cols-4 gap-4 p-2">
          <Card title="PENDING" data={"250"} icon={0} />
          <Card title="SUCCESS" data={"200"} icon={1} />
          <Card title="FAILED" data={"50"} icon={2} />
          <Card title="DECLINED" data={"2,000"} icon={3} />
        </div>
      </GlobalContainer>
      <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
        <div className="p-1">
          <TransactionHistoryTable />
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryContainer;
