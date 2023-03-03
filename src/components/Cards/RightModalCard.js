import React from "react";

const RightModalCard = ({
  firstKey,
  firstValue,
  secondKey,
  secondValue,
  secondImage,
  comments,
}) => {
  return (
    <div className="flex text-left">
      {!comments && (
        <>
          <div className="border border-gray-300  border-l-0  w-1/2 h-20 p-3">
            <p className="my-1 text-xs leading-relaxed text-gray-500">
              {firstKey}
            </p>
            <h4 className="text-base font-semibold text-[#1D0218]">
              {firstValue}
            </h4>
          </div>
          <div className="border border-gray-300 border-r-0 w-1/2 h-20 p-3">
            <p className="my-1 text-xs leading-relaxed text-gray-500">
              {secondKey}
            </p>
            <div className="flex space-x-3">
              {secondImage && <img src={secondImage} className="w-5 h-5" />}
              <h4
                className={` text-base font-semibold text-[#1D0218] ${
                  secondValue === "Pending"
                    ? "bg-[#FDF6B2] text-[#723B13] rounded-lg p-0.5 px-2"
                    : secondValue === "Success"
                    ? "bg-[#DEF7EC]  text-[#03543F] rounded-lg p-0.5 px-2"
                    : secondValue === "Declined"
                    ? "bg-[#F3F4F6] text-[#111928] rounded-lg p-0.5 px-2"
                    : secondValue === "Failed"
                    ? "bg-[#FDE8E8] text-[#9B1C1C] rounded-lg p-0.5 px-2"
                    : ""
                }`}>
                {secondValue}
              </h4>
            </div>
          </div>
        </>
      )}
      {comments && secondValue === "Declined" && (
        <div className="w-full">
          <p className="my-1 text-base leading-relaxed text-dark-purple font-medium  p-3">
            {firstKey}
          </p>
          <div className="border border-gray-300  border-x-0  w-full h-20 p-3">
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
      )}
    </div>
  );
};

export default RightModalCard;
