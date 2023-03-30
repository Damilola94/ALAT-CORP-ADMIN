import GlobalContainer from "../../ui/GlobalContainer";
import SentAnnouncementTable from "../../Tables/SentAnnouncementTable";
import ScheduleAnnouncementTable from "../../Tables/ScheduleAnnouncementTable";
import { useState } from "react";

const AnnouncementContainer = ({ handleCreateAnnouncement }) => {
  const [toggle, setToggle] = useState(1);
  return (
    <>
      <div className="h-fit mb-4">
        <GlobalContainer
          handleAddModal={handleCreateAnnouncement}
          pageName={"Announcement"}
          buttonTitle={"Create Annoucement"}
        />
        <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
          <div className="border-b-2 border-gray-300 mb-[18px]">
            <div className="ml-2 flex space-x-6">
              <button onClick={() => setToggle(1)} className="">
                <h1
                  className={`my-2 font-semibold ${
                    toggle === 1 && "text-dark-purple"
                  }`}>
                  Sent
                </h1>
                {toggle === 1 && (
                  <hr className="border-b-2 border-dark-purple" />
                )}
              </button>
              <button onClick={() => setToggle(2)}>
                <h1
                  className={`my-2 font-semibold ${
                    toggle === 2 && "text-dark-purple"
                  }`}>
                  Scheduled
                </h1>
                {toggle === 2 && (
                  <hr className="border-b-2 mt-[5px] border-dark-purple" />
                )}
              </button>
            </div>
          </div>
          <div className="p-1">
            {toggle === 1 && (
              <SentAnnouncementTable
                handleCreateAnnouncement={handleCreateAnnouncement}
              />
            )}
            {toggle === 2 && (
              <ScheduleAnnouncementTable
                handleCreateAnnouncement={handleCreateAnnouncement}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementContainer;
