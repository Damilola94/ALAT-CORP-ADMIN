import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { ImDatabase } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrSecure } from "react-icons/gr";
import { MdOutlineBackup } from "react-icons/md";

const SettingData = [
  {
    title: "General",
    subtitle: "View your Cooperative account information here",
    icon: <AiOutlineUser />,
  },
  {
    title: "Account",
    subtitle: "View and update your  account information here",
    icon: <ImDatabase />,
  },
  {
    title: "Notifications",
    subtitle: "Manage your account notifications here",
    icon: <IoIosNotificationsOutline />,
  },
  {
    title: "Security Settings",
    subtitle: "View and update authentication details here",
    icon: <GrSecure className="text-gray-500" />,
  },
  {
    title: "Backup and Recovery",
    subtitle: "Backup and recover files here",
    icon: <MdOutlineBackup />,
  },
];

const SettingCard = ({ item, id, setView, view }) => {
  const { subtitle, icon, title } = item;
  return (
    <div
      key={id}
      className={`border-b align-middle bg-white w-full  p-3 text-gray-500 h-28 cursor-pointer hover:bg-light-purple ${
        view === 1 ? "bg-light-purple" : ""
      }`}
      onClick={() => setView(id)}>
      <div className="flex items-center align-middle">
        {icon}
        <h1 className="font-bold text-base ml-5">{title}</h1>
      </div>
      <p className="text-gray-500 text-xs ml-9">{subtitle}</p>
    </div>
  );
};

const SettingList = ({ setView, view }) => {
  return (
    <>
      <div className="w-1/3 border-r-2 border-r-gray-300 -my-3 p-4">
        {SettingData.map((item, _) => (
          <SettingCard
            item={item}
            id={_}
            key={_}
            setView={setView}
            view={view}
          />
        ))}
      </div>
    </>
  );
};

export default SettingList;
