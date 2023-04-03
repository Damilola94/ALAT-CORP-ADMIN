import { useState } from "react";

import LoanHistoryTable from "../Tables/Users/UsersDetailsTables/LoanTable/LoanHistoryTable";
import RepaymentHistoryTable from "../Tables/Users/UsersDetailsTables/LoanTable/RepaymentHistoryTable";

const UsersDetailsLoanContainer = ({}) => {
  const [toggle, setToggle] = useState(1);
  
  const displayContent = (step) => {
    switch (step) {
      case 1:
        return <LoanHistoryTable />;
      case 2:
        return <RepaymentHistoryTable />;
      default:
    }
  };

  return (
    <>
      <div className="h-fit mb-4">
        <div className="">
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
                {toggle === 1 && (
                  <hr className="border-b-2 border-dark-purple" />
                )}
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
          <div className="p-1">{displayContent(toggle)}</div>
        </div>
      </div>
    </>
  );
};

export default UsersDetailsLoanContainer;
