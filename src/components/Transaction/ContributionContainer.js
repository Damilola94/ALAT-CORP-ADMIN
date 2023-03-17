import React from "react";

import GlobalContainer from "../ui/GlobalContainer";
import ContributionTable from "../Tables/ContributionTable";

const ContributionContainer = () => {
   return (
    <>
      <div className="h-fit mb-4">
        <GlobalContainer
          pageName={"Contribution"}
        />
        <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
          <div className="p-1">
            <ContributionTable  />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributionContainer;
