import React from "react";

import DashboardContainerUI from "./ui/DashboardContainerUI";
import Card from "./Cards/Card";
import Middle from "./Middle";
import RightBar from "./SideBars/RightBar";

const DashboardContainer = () => {
  return (
    <div className="h-fit">
      <DashboardContainerUI>
        <div className="grid lg:grid-cols-5 gap-4">
          <Card title="DEPOSIT BALANCE" balance={"25,000,000"} icon={0} />
          <Card title="LOAN BALANCE" balance={"300,000"} icon={1} />
          <Card title="TOTAL LOAN AMOUNT" balance={"10,000"} icon={2} />
          <Card title="TOTAL LOAN REQUEST" balance={"2,000"} icon={3} />
          <Card title="TOTAL MEMBERS" balance={254} icon={3} />
        </div>
      </DashboardContainerUI>
      <div className="flex m-6 mt-6 space-x-6">
        <Middle />
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardContainer;
