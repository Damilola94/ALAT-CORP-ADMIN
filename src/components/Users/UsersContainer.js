import { useState } from "react";

import Card from "../Cards/Card";
import GlobalContainer from "../ui/GlobalContainer";
import AdminsTable from "../Tables/Users/AdminsTable";
import MembersTable from "../Tables/Users/MembersTable";
import InvitedTable from "../Tables/Users/InvitedTable";

const UsersContainer = ({  }) => {
  const [toggle, setToggle] = useState(1);
  return (
    <>
      <div className="h-fit mb-4">
        <GlobalContainer
          pageName={"Users Overview"}
          buttonTitle={"Download User List"}
          inviteButton={"Invite New User"}
        >
          <div className="grid lg:grid-cols-5 gap-4 p-2">
            <Card title="TOTAL USERS" data={"250"} icon={0} />
            <Card title="MEMBERS" data={"200"} icon={1} />
            <Card title="ADMINISTRATORS" data={"50"} icon={2} />
            <Card title="ACTIVE USERS" data={"2,000"} icon={3} />
            <Card title="DISABLED USERS" data={254} icon={3} />
          </div>
        </GlobalContainer>
        <div className="p-2 mx-6 mt-6 bg-white rounded-lg border border-gray-200">
          <div className="border-b-2 border-gray-300 mb-[18px]">
            <div className="ml-2 flex space-x-6">
              <button onClick={() => setToggle(1)} className="">
                <h1
                  className={`my-2 font-semibold ${
                    toggle === 1 && "text-dark-purple"
                  }`}
                >
                  All Users
                </h1>
                {toggle === 1 && (
                  <hr className="border-b-2 border-dark-purple" />
                )}
              </button>
              <button onClick={() => setToggle(2)}>
                <h1
                  className={`my-2 font-semibold ${
                    toggle === 2 && "text-dark-purple"
                  }`}
                >
                  Admins
                </h1>
                {toggle === 2 && (
                  <hr className="border-b-2 mt-[5px] border-dark-purple" />
                )}
              </button>
              <button onClick={() => setToggle(3)}>
                <h1
                  className={`my-2 font-semibold ${
                    toggle === 3 && "text-dark-purple"
                  }`}
                >
                  Invited
                </h1>
                {toggle === 3 && (
                  <hr className="border-b-2 mt-[5px] border-dark-purple" />
                )}
              </button>
            </div>
          </div>
          <div className="p-1">
            {toggle === 1 && (
              <MembersTable
              />
            )}
            {toggle === 2 && (
              <AdminsTable
              />
            )}
            {toggle === 3 && (
              <InvitedTable
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersContainer;
