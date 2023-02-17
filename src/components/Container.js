import React from "react";

import Card from "./Card";
import Middle from "./Middle";
import RightBar from "./RightBar";

const Container = () => {
  return (
    <div className="h-fit">
      <div className="flex p-4 space-x-3">
        {/* <Card title="TOTAL" balance={409.079} icon={0} />
        <Card title="AVAILABLE" balance={305.079} icon={1} />
        <Card title="CLAIMABLE REWARD" balance={100.079} icon={2} />
        <Card title="DELEGATED" balance={539.079} icon={3} /> */}
      </div>
      <div className="flex ml-3 mt-6 space-x-6  mr-4">
        {/* <Middle />
        <RightBar /> */}
      </div>
    </div>
  );
};

export default Container;
