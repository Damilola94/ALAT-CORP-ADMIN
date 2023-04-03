import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";

import GlobalContainer from "../ui/GlobalContainer";
import MemberContainer from "../Users/UserMemberDetails";
import ContributionDetailsTable from "../Tables/Users/UsersDetailsTables/ContributionDetails";
import IncentiveTable from "../Tables/Users/UsersDetailsTables/IncentiveTable";
import LoanContainer from "../Users/UsersDetailsLoanContainer";


const UsersDetailsContainer = ({}) => {
  const [toggle, setToggle] = useState(1);
  const router = useRouter();

  const displayContent = (step) => {
    switch (step) {
      case 1:
        return <MemberContainer />;
      case 2:
        return <ContributionDetailsTable />;
      case 3:
        return <LoanContainer />;
      case 4:
        return <IncentiveTable />;
      default:
    }
  };

  const handleCommunication = () => {
    router.push("/communication/chat");
  };

  return (
    <>
      <div className="h-fit mb-4">
        <GlobalContainer
          pageName={"Lapo John"}
          backButton
          chatButton={"Chat"}
          handleAddModal={handleCommunication}
          chatIcon={
            <BsThreeDotsVertical className="text-dark-purple text-xl" />
          }
        />
        <div className="p-2 mx-6  bg-white rounded-b-lg border border-gray-200">
          <div className="border-b-2 border-gray-300 mb-[18px]">
            <div className="ml-2 flex space-x-6">
              <button onClick={() => setToggle(1)} className="">
                <h1
                  className={`my-2 font-semibold ${
                    toggle === 1 && "text-dark-purple"
                  }`}
                >
                  Member Details
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
                  Contribution History
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
                  Loans
                </h1>
                {toggle === 3 && (
                  <hr className="border-b-2 mt-[5px] border-dark-purple" />
                )}
              </button>
              <button onClick={() => setToggle(4)}>
                <h1
                  className={`my-2 font-semibold ${
                    toggle === 4 && "text-dark-purple"
                  }`}
                >
                  Incentives
                </h1>
                {toggle === 4 && (
                  <hr className="border-b-2 mt-[5px] border-dark-purple" />
                )}
              </button>
            </div>
          </div>
          <div className="p-1">{displayContent(toggle)}</div>
        </div>
      </div>
    </>
  );
};

export default UsersDetailsContainer;
