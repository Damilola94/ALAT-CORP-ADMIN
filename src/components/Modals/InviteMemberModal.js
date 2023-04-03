import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlinePlusCircle } from "react-icons/ai";


const InviteMemberModal = ({
  handleAddModal,
  addModal,
  handleSuccesInvite,
}) => {
  const [addData, setAddData] = useState("");
  const [options, setOptions] = useState(1);

  const invitedUsers = [
    { email: "lapojohn@gmail.com" },
    { email: "lapojohn@gmail.com" },
    { email: "lapojohn@gmail.com" },
    { email: "lapojohn@gmail.com" },
    { email: "lapojohn@gmail.com" },
    { email: "lapojohn@gmail.com" },
    { email: "lapojohn@gmail.com" },
    { email: "lapojohn@gmail.com" },
    { email: "lapojohn@gmail.com" },
  ];

  const InvitedUsersCard = ({ item, id }) => {
    const { email } = item;
    return (
      <div
        key={id}
        className=" bg-gray-200 m-1 rounded-md p-1  flex items-center space-x-1 justify-between"
        onClick={() => {}}
      >
        <h1 className="font-sans text-[10px]"> {email}</h1>
        <div onClick={() => {}}>
          <ImCancelCircle className="= text-[10px] cursor-pointer" />
        </div>
      </div>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });
  };

  const handleSendInvite = () => {
    handleAddModal();
    handleSuccesInvite();
  };

  return (
    <>
      {addModal ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleAddModal()}
            ></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-md mx-auto bg-white shadow-lg  flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8">
                        <div>
                          <h2 className="text-2xl font-bold w-full text-[#333333]">
                            Invite new users
                          </h2>
                          <p className="mt-3 font-normal text-xs max-w-xs">
                            Invite users with email and give permission to all
                            or specific sections of the platform.
                          </p>
                        </div>
                        <div onClick={() => handleAddModal()}>
                          <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-4 h-[500px] overflow-y-auto  overflow-x-hidden scrollbar scrollbar-thumb-dark-purple scrollbar-track-gray-200
                        scrollbar-thumb-rounded"
                    >
                      <div className="w-full">
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className="mt-3 h-6 text-base font-medium leading-8 text-gray-500">
                              Email Address
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={addData?.["Email Address"] || ""}
                                name="Email Address"
                                placeholder="name@example.com"
                                type="email"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-3 w-full">
                          <div className="w-1/2 flex-1 ">
                            <div className="h-6 text-base font-medium leading-8 text-gray-500">
                              First Name
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill w-full">
                              <input
                                onChange={handleChange}
                                value={addData?.["fName"] || ""}
                                name="fName"
                                placeholder="First Name"
                                className="bg-input-fill outline-none text-sm flex-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="w-1/2 flex-1 ">
                            <div className="h-6 text-base font-medium leading-8 text-gray-500">
                              Last Name
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={addData?.["lName"] || ""}
                                name="lName"
                                placeholder="Last Name"
                                className="bg-input-fill outline-none text-sm flex-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-16 w-full">
                          <div className="w-full flex-1 ">
                            <div className=" h-6 text-base font-medium leading-8 text-gray-500">
                              Phone Number
                            </div>
                            <div className="p-3 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                              <input
                                onChange={handleChange}
                                value={addData?.["pNumber"] || ""}
                                name="pNumber"
                                placeholder="Account number"
                                className="bg-input-fill outline-none text-sm flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <h1 className="font-semibold">User Role</h1>
                        <div>
                          <div>
                            <div
                              className={`${
                                options === 1
                                  ? " text-dark-purple"
                                  : " text-gray-400"
                              }  mt-5 rounded-md font-semibold cursor-pointer flex  text-base`}
                            >
                              <input
                                type="radio"
                                className={`${
                                  options === 1
                                    ? "accent-dark-purple"
                                    : "accent-gray-400"
                                }`}
                                onClick={() => setOptions(1)}
                              />
                              <h3 className="ml-3">Member</h3>
                            </div>
                            <p className="font-normal ml-6 text-sm">
                              Lorem ipsum dolor sit amet consectetur. At arcu
                              augue nec hac arcu congue elementum. Dolor egestas
                              eget
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div
                              className={`${
                                options === 2
                                  ? " text-dark-purple"
                                  : " text-gray-400"
                              }  mt-5 rounded-md font-semibold cursor-pointer flex  text-base`}
                            >
                              <input
                                type="radio"
                                className={`${
                                  options === 2
                                    ? "accent-dark-purple"
                                    : "accent-gray-400"
                                }`}
                                onClick={() => setOptions(2)}
                              />
                              <h3 className="ml-3">Initiator</h3>
                            </div>
                            <p className="font-normal ml-6 text-sm">
                              Lorem ipsum dolor sit amet consectetur. At arcu
                              augue nec hac arcu congue elementum. Dolor egestas
                              eget
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div
                              className={`${
                                options === 3
                                  ? " text-dark-purple"
                                  : " text-gray-400"
                              }  mt-5 rounded-md font-semibold cursor-pointer flex  text-base`}
                            >
                              <input
                                type="radio"
                                className={`${
                                  options === 3
                                    ? "accent-dark-purple"
                                    : "accent-gray-400"
                                }`}
                                onClick={() => setOptions(3)}
                              />
                              <h3 className="ml-3">Verifier</h3>
                            </div>
                            <p className="font-normal ml-6 text-sm">
                              Lorem ipsum dolor sit amet consectetur. At arcu
                              augue nec hac arcu congue elementum. Dolor egestas
                              eget
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div
                              className={`${
                                options === 4
                                  ? " text-dark-purple"
                                  : " text-gray-400"
                              }  mt-5 rounded-md font-semibold cursor-pointer flex  text-base`}
                            >
                              <input
                                type="radio"
                                className={`${
                                  options === 4
                                    ? "accent-dark-purple"
                                    : "accent-gray-400"
                                }`}
                                onClick={() => setOptions(4)}
                              />
                              <h3 className="ml-3">Approver</h3>
                            </div>
                            <p className="font-normal ml-6 text-sm">
                              Lorem ipsum dolor sit amet consectetur. At arcu
                              augue nec hac arcu congue elementum. Dolor egestas
                              eget
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr className="my-5" />
                      <div className="flex flex-wrap w-full">
                        {invitedUsers.map((item, _) => (
                          <InvitedUsersCard item={item} id={_} key={_} />
                        ))}
                      </div>
                      <div className=" bg-light-purple text-dark-purple px-5 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out flex w-3/5 my-12 items-center space-x-5">
                        <AiOutlinePlusCircle />
                        <button onClick={() => handleSavedValue()} className="">
                          Invite another user
                        </button>
                      </div>
                      <div className="container flex justify-end mt-8 space-x-4">
                        <button
                          onClick={() => handleAddModal()}
                          className={`bg-white text-dark-purple py- px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSendInvite()}
                          className="bg-dark-purple text-white px-12 py-2 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out"
                        >
                          Send Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default InviteMemberModal;
