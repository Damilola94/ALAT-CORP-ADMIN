import React, { useState } from "react";
import SettingMenuList from "./SettingMenuList";
import GeneralSettings from "./Feed/GeneralSettings";
import AccountInformation from "./Feed/AccountInformation";
import NotificationSettings from "./Feed/NotificationSettings";
import SecuritySetting from "./Feed/SecuritySetting";
import BackupDataRecovery from "./Feed/BackupDataRecovery";

const SettingContainer = () => {
  const [view, setView] = useState(0);

  const displaySetting = (step) => {
    switch (step) {
      case 0:
        return <GeneralSettings />;
      case 1:
        return <AccountInformation />;
      case 2:
        return <NotificationSettings />;
      case 3:
        return <SecuritySetting />;
      case 4:
        return <BackupDataRecovery />;
      default:
    }
  };

  return (
    <>
      <div className="h-fit mb-4">
        <div className="p-2 mx-6 mt-6  bg-white rounded-lg border border-gray-200">
          <div className="p-1 flex">
            <SettingMenuList setView={setView} view={view} />
            {displaySetting(view)}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingContainer;
