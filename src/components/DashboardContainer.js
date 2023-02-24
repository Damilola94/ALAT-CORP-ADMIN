import React from "react";

import Card from "./Card";
import Middle from "./Middle";
import RightBar from "./RightBar";

const Container = () => {
  return (
    <div className="h-fit">
      <div
        className="flex space-x-3  m-6 flex-col 
      bg-white rounded-xl border border-gray-100">
        <div className="border-b p-3 border-gray-100">
          <p className="text-2xl font-bold mb-4 text-[#3E0434] ">
            Dashboard Overview
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-4">
          <Card title="DEPOSIT BALANCE" balance={409.079} icon={0} />
          <Card title="LOAN BALANCE" balance={305.079} icon={1} />
          <Card title="TOTAL LOAN AMOUNT" balance={100.079} icon={2} />
          <Card title="TOTAL LOAN REQUEST" balance={539.079} icon={3} />
          <Card title="TOTAL MEMBERS" balance={539.079} icon={3} />
        </div>
      </div>
      <div className="flex m-6 mt-6 space-x-6">
        <Middle />
        <RightBar />
      </div>
    </div>
  );
};

export default Container;
