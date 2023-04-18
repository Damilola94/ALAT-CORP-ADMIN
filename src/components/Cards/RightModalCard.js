import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

const RightModalCard = ({
  firstKey,
  firstValue,
  secondKey,
  secondValue,
  secondImage,
  comments,
  memberLoan,
}) => {
  return (
    <div className="flex text-left">
      {!comments && (
        <>
          <div className="border border-gray-300 border-l-0  w-1/2 md:h-16 h-20 p-3">
            <p className="text-xs leading-relaxed text-gray-500">{firstKey}</p>
            <h4 className="text-base font-semibold text-[#1D0218]">
              {firstValue}
            </h4>
          </div>
          <div className="border border-gray-300 border-r-0 w-1/2 md:h-16 h-20 p-3">
            <p className="text-xs leading-relaxed text-gray-500">{secondKey}</p>
            <div className="flex space-x-3">
              {secondImage && <img src={secondImage} className="w-5 h-5" />}
              {!memberLoan ? (
                <h4
                  className={` text-base font-semibold text-[#1D0218] ${
                    secondValue === "Pending"
                      ? "bg-[#FDF6B2] text-[#723B13] rounded-lg  px-2"
                      : secondValue === "Success"
                      ? "bg-[#DEF7EC]  text-[#03543F] rounded-lg px-2"
                      : secondValue === "Declined"
                      ? "bg-[#DEF7EC]  text-[#03543F] rounded-lg px-2"
                      : secondValue === "Verified"
                      ? "bg-[#E1EFFE] text-[#1E429F] rounded-lg px-2"
                      : secondValue === "Failed"
                      ? "bg-[#FDE8E8] text-[#9B1C1C] rounded-lg px-2"
                      : ""
                  }`}
                >
                  {secondValue}
                </h4>
              ) : (
                <h4
                  className={`text-base font-semibold ${
                    secondValue === "In Review"
                      ? "bg-[#FDF6B2] rounded-md  text-[#723B13] p-0.5 text-[12px]"
                      : secondValue === "Disbursed"
                      ? "bg-[#DEF7EC] rounded-md text-[#03543F] p-0.5 text-[12px]"
                      : secondValue === "Approved"
                      ? "bg-[#E1EFFE] rounded-md  text-[#1E429F] p-0.5 text-[12px]"
                      : secondValue === "Repaid"
                      ? "bg-[#EDEBFE] rounded-md text-[#5521B5] p-0.5 text-[12px]"
                      : secondValue === "Rejected"
                      ? "bg-[#FDE8E8] rounded-md text-[#9B1C1C] p-0.5 text-[12px]"
                      : secondValue === "Performing"
                      ? "bg-[#FCE8F3] rounded-md text-[#99154B] p-0.5 text-[12px]"
                      : ""
                  }`}
                >
                  {secondValue}
                </h4>
              )}
            </div>
          </div>
        </>
      )}
      {comments && secondValue === "Declined" ? (
        <div className="w-full">
          <p className="my-1 text-base leading-relaxed text-dark-purple font-medium  p-3">
            {firstKey}
          </p>
          <div className="border border-gray-300  border-x-0  w-full md:h-16 h-20 p-3">
            <div className="flex items-center">
              <div className="flex items-center justify-center flex-none w-12 h-12 bg-[#FBF3F5] rounded-full mr-2 text-dark-purple">
                <p>G</p>
              </div>
              <div className="ml-2">
                <p className="my-0.5 text-xs leading-relaxed text-gray-500">
                  {secondValue}
                </p>
                <p className="text-base font-normal text-[#1D0218]">
                  {firstValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : comments && secondValue === "In Review" ? (
        <div className="w-full">
          <p className="my-1 text-base leading-relaxed text-dark-purple font-medium  p-3">
            {firstKey}
          </p>
          <div className="border border-gray-300  border-x-0  w-full md:h-16 h-20 p-3">
            <div className="flex items-center">
              <div>
                <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />
              </div>
              <div className="ml-2">
                <p className="text-base font-normal text-[#1D0218]">
                  {firstValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : comments && secondValue === "Rejected" ? (
        <div className="flex flex-col w-full">
          <div className="w-full">
            <p className="my-1 text-base leading-relaxed text-dark-purple font-medium  p-3">
              {firstKey}
            </p>
            <div className="border border-gray-300  border-x-0  w-full md:h-16 h-20 p-3">
              <div className="flex items-center">
                <div>
                  <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />
                </div>
                <div className="ml-2">
                  <p className="text-base font-normal text-[#1D0218]">
                    {firstValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-10">
          <p className="my-1 text-base leading-relaxed text-dark-purple font-medium  p-3">
            {"Comments"}
          </p>
          <div className="border border-gray-300  border-x-0  w-full md:h-16 h-20 p-3">
            <div className="flex items-center">
              <div className="flex items-center justify-center flex-none w-12 h-12 bg-[#FBF3F5] rounded-full mr-2 text-dark-purple">
                <p>G</p>
              </div>
              <div className="ml-2">
                <p className="my-0.5 text-xs leading-relaxed text-gray-500">
                  {secondValue}
                </p>
                <p className="text-base font-normal text-[#1D0218]">
                  {firstValue}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      ) : null}
    </div>
  );
};

export default RightModalCard;
