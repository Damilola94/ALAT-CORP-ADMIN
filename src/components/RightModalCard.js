import React from "react";

const RightModalCard = ({
  firstKey,
  firstValue,
  secondKey,
  secondValue,
  secondImage,
}) => {
  return (
    <div className="flex text-left">
      <div className="border border-gray-300  border-l-0  w-1/2 h-20 p-3">
        <p className="my-2 text-xs leading-relaxed text-gray-500">{firstKey}</p>
        <h4 className="text-base font-semibold text-[#1D0218]">{firstValue}</h4>
      </div>
      <div className="border border-gray-300 border-r-0 w-1/2 h-20 p-3">
        <p className="my-2 text-xs leading-relaxed text-gray-500">
          {secondKey}
        </p>
        <div className="flex space-x-3">
          {secondImage && <img src={secondImage} className="w-5 h-5" />}
          <h4 className="text-base font-semibold text-[#1D0218]">
            {secondValue}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RightModalCard;
