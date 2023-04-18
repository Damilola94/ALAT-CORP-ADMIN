import React, { useState } from "react";

import Card from "../Cards/Card";
import GlobalContainer from "../ui/GlobalContainer";
import MemberLoanTable from "../Tables/LoanManagement/MemberLoanTable";
import RepaymentHistoryTable from "../Tables/LoanManagement/RepaymentHistoryTable";

const MemberLoanContainer = () => {
  const [toggle, setToggle] = useState(1);

  const displayTable = (step) => {
    switch (step) {
      case 1:
        return <MemberLoanTable />;
      case 2:
        return <RepaymentHistoryTable />;
      default:
    }
  };

  return (
    <div className="h-fit mb-6">
      <GlobalContainer pageName={"Member’s Loan"}>
        <div className="grid lg:grid-cols-5 gap-4 p-2">
          <Card title="TOTAL AMOUNT REFUNDABLE" balance={"250"} icon={0} />
          <Card title="TOTAL AMOUNT DISBURSED" balance={"200"} icon={1} />
          <Card title="TOTAL INTEREST" balance={"50"} icon={2} />
          <Card title="TOTAL LOAN AMOUNT PAID" balance={"2,000"} icon={3} />
          <Card title="TOTAL LOAN REPAYABLE" balance={"2,000"} icon={4} />
        </div>
      </GlobalContainer>
      <div className="p-2 mx-6 mt-5 bg-white rounded-b-lg border border-gray-200">
        <div className="border-b-2 border-gray-300 mb-[18px]">
          <div className="ml-2 flex space-x-6">
            <button onClick={() => setToggle(1)} className="">
              <h1
                className={`my-2 font-semibold ${
                  toggle === 1 && "text-dark-purple"
                }`}
              >
                Loan History
              </h1>
              {toggle === 1 && <hr className="border-b-2 border-dark-purple" />}
            </button>
            <button onClick={() => setToggle(2)}>
              <h1
                className={`my-2 font-semibold ${
                  toggle === 2 && "text-dark-purple"
                }`}
              >
                Repayment History
              </h1>
              {toggle === 2 && (
                <hr className="border-b-2 mt-[5px] border-dark-purple" />
              )}
            </button>
          </div>
        </div>
        <div className="p-1">{displayTable(toggle)}</div>
      </div>
    </div>
  );
};

export default MemberLoanContainer;
