import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import RightModalCard from "./RightModalCard";

const RightSideModal = ({ onClick }) => {
  const showModal = true;
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={onClick}></div>
            <div className="flex items-center min-h-screen">
              <div className="relative w-full max-w-lg bg-white shadow-lg h-screen ml-auto text-center">
                <div className="flex text-center  justify-center h-16 w-full bg-[#F9FAFB] items-center ">
                  <div className="flex items-center justify-center flex-none w-6 h-6 border border-dark-purple rounded-full text-dark-purple">
                    <MdKeyboardArrowLeft className="text-3xl" />
                  </div>
                  <p className="mx-5">1 of 100</p>
                  <div className="flex items-center justify-center flex-none  w-6 h-6 border border-dark-purple rounded-full text-dark-purple">
                    <MdKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>
                <RightModalCard
                  firstKey={"TRANSACTION ID"}
                  firstValue={"TTR-6371539936789999000ee"}
                  secondKey={"BANK NAME"}
                  secondValue={"ALATbyWema"}
                  secondImage={"/bank-logo/alat.jfif"}
                />
                <RightModalCard
                  firstKey={"ACCOUNT NUMBER"}
                  firstValue={"2190404040"}
                  secondKey={"ACOOUNT NAME"}
                  secondValue={"Oladapo John"}
                />
                <RightModalCard
                  firstKey={"DATE CREATED"}
                  firstValue={"20 Feb, 2023 @5:30am"}
                  secondKey={"AMOUNT"}
                  secondValue={"Oladapo John"}
                />
                <RightModalCard
                  firstKey={"RAISED BY"}
                  firstValue={"David John"}
                  secondKey={""}
                  secondValue={""}
                />
                <div className="flex  items-center justify-center align-middle bg-white shadow-2xl absolute bottom-0 w-full cursor-pointer">
                  <div className="w-1/2 bg-white h-16   py-6 text-dark-purple  font-semibold">
                    REJECT
                  </div>
                  <div className="w-1/2  bg-dark-purple h-16 py-6 text-white font-semibold">
                    APPROVE
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

export default RightSideModal;
