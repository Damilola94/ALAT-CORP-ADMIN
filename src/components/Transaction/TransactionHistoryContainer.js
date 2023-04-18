import React from "react";
import { useQuery } from 'react-query'

import Card from "../Cards/Card";
import GlobalContainer from "../ui/GlobalContainer";
import TransactionHistoryTable from "../Tables/Transaction/TransactionHistoryTable";

const TransactionHistoryContainer = () => {
  const data = useQuery('transactions')

  const handleAddModal = () => {
  };

  const countTransactionStatus = data?.data?.data?.data?.reduce((acc, item) => {
    const { transactionStatus } = item;
    if (acc[transactionStatus]) {
      acc[transactionStatus] += 1;
    } else {
      acc[transactionStatus] = 1;
    }
    return acc;
  }, {});
  
  return (
    <div className="h-fit mb-6">
      <GlobalContainer pageName={"Transaction History"} buttonTitle={"Download Transaction History"}
          handleAddModal={handleAddModal}>
        <div className="grid lg:grid-cols-5 gap-5 p-2">
          <Card title="PENDING" data={countTransactionStatus?.pending || "0"} icon={0} />
          <Card title="SUCCESS" data={countTransactionStatus?.success || "0"} icon={1} />
          <Card title="FAILED" data={countTransactionStatus?.failed || "0"} icon={2} />
          <Card title="VERIFIED" data={countTransactionStatus?.verified || "0"} icon={3} />
          <Card title="DECLINED" data={countTransactionStatus?.declined || "0"} icon={3} />
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
