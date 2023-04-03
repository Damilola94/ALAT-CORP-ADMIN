import React, { useState } from "react";
import { ImDatabase } from "react-icons/im";
import EmptyState from "@/components/EmptyState";

const Feed = () => {
  return (
    <>
      <div className="flex justify-between w-5/6">
        <EmptyState
          title={"Lorem ipsum dolor sit amet consectetur"}
          subTitle={
            "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur"
          }
          icon={<ImDatabase className="text-4xl text-[#C2C9D1]" />}
        />
      </div>
    </>
  );
};

export default Feed;
