import React from "react";

import GlobalContainer from "../ui/GlobalContainer";
import Stepper from "../Transaction";

const FundTransferContainer = () => {
  return (
    <div className="h-fit mb-4">
      <GlobalContainer pageName={"Fund Transfer"} />
      <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
        <div className="p-1">
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export default FundTransferContainer;
