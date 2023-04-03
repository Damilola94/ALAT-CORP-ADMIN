import { useState } from "react";

const UserMemberDetails = ({}) => {
  return (
    <>
      <div className="h-fit mb-4 m-4">
        <div className="w-full">
          <div>
            <p className="mt-2 font-semibold text-sm mb-2">Profile Picture</p>
            <div className="relative">
              <div className="flex items-center justify-center flex-none w-24 h-24 bg-gray-100 rounded-full mr-2  font-medium mt-4 text-base text-gray-400">LJ</div>
            </div>
            <div className="flex space-x-10 my-8">
              <div>
                <h1 className="font-bold text-xs">DATE ADDED</h1>
                <p className="text-sm my-5 text-gray-300">20th Mar 2023</p>
              </div>
              <div>
              <h1 className="font-bold text-xs">LAST ACTIVE</h1>
              <p className="text-sm my-5 text-gray-300">20th Mar 2023</p>
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <div className="mt-6">
              <label className="text-gray-500 font-semibold w-full">
                Email Address
              </label>
              <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                <input
                  type="email"
                  name="email"
                  disabled
                  placeholder="abccooperatives@gmail.com"
                  className="bg-input-fill outline-none text-sm flex-1 h-8"
                />
              </div>
            </div>
            <div className="flex space-x-6 w-full">
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">
                  First Name
                </label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="fName"
                    placeholder="Lapo"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">
                  Last Name
                </label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="lName"
                    placeholder="John"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-6 w-full">
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">
                  Other Name
                </label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="oName"
                    placeholder="IE"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">
                  User Role
                </label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="member"
                    placeholder="Member"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-6 w-full">
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">
                  Phone Number
                </label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="number"
                    name="pNumber"
                    placeholder="07020000008"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">Gender</label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="gender"
                    placeholder="Male"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-6 w-full">
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">
                  Date of Birth
                </label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="dob"
                    placeholder="09 Mar 2005"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">Address</label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="gender"
                    placeholder="Male"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex space-x-6 w-full">
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">State</label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="dob"
                    placeholder="09 Mar 2005"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="mt-6 w-full">
                <label className="text-gray-500 font-semibold ">
                  09 Mar 2005
                </label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="text"
                    name="gender"
                    placeholder="Male"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-10"/>
          <button
            onClick={()=>{}}
            className="bg-dark-purple text-white px-8 rounded-lg font-semibold py-2 flex cursor-pointer ml-auto hover:border-dark-purple hover:bg-white hover:border hover:text-dark-purple translate duration-200 ease-in-out"
          >Update</button>
        </div>
      </div>
    </>
  );
};

export default UserMemberDetails;
