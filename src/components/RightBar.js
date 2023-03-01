import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import UpcomingEvent from "./UpcomingEvent";

const RightBar = () => {
  return (
    <div className="bg-white w-4/12 rounded-xl border border-gray-200">
      <div className="flex border-b p-3 border-gray-300 justify-between align-middle items-center">
        <p className="text-lg font-bold text-[#3E0434]">Upcoming Event</p>
        <div className="flex items-center rounded-md align-middle p-3 text-red-600">
          <p>View All</p>
          <BsArrowRightCircleFill className="ml-2 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <UpcomingEvent />
        <UpcomingEvent />
      </div>
    </div>
  );
};

export default RightBar;
