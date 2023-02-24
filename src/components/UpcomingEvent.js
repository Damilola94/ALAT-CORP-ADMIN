import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { CgCalendarDates } from "react-icons/cg";

const UpcomingEvent = () => {
  return (
    <div className="">
      <div className="inline-block border-b p-5 ">
        <p className="text-lg font-bold mb-1 text-dark-purple">
          Members Meetings
        </p>
        <div className="text-sm text-gray-500">
          <p>
            Lorem ipsum dolor asset ifish juxtereb fghdh hdh hfedLorem ipsum
            dolor asset ifish juxtereb fghdh hdh hfed......
          </p>
          <p className="text-sm mt-5 mb-3 text-black">Details</p>
          <div>
            <div className="flex items-center align-middle">
              <HiLocationMarker className="text-2xl text-gray-500" />
              <p className="text-gray-500 ml-2">Online</p>
            </div>
            <div className="flex items-center align-middle">
              <CgCalendarDates className="text-2xl text-gray-500" />
              <p className="text-gray-500 ml-2">10:00 am - 12:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
