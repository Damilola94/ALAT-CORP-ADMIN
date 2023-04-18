import React, { Children } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const GlobalContainer = ({
  pageName,
  buttonTitle,
  inviteButton,
  handleAddModal,
  backButton,
  children,
  chatButton,
  chatIcon,
  userBackButton,
  handleBack,
}) => {
  return (
    <div
      className={`mx-6 mt-6 flex flex-col bg-white  ${
        pageName === "Users Overview" ? "rounded-b-lg" : ""
      } `}>
      <div
        className={`flex space-x-3 justify-between rounded-t-lg border-b border-gray-200 p-2`}>
        <div className="flex space-x-4 items-center">
          {backButton && (
            <MdOutlineKeyboardBackspace
              onClick={!userBackButton ? handleAddModal : handleBack}
              className="text-gray-500  text-2xl cursor-pointer"
            />
          )}
          <p className="text-lg font-normal mb-2 text-[rgb(29,2,24)]">
            {pageName}
          </p>
        </div>
        {chatButton && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleAddModal}
              className="bg-dark-purple  text-white px-8 rounded-lg font-semibold py-2 cursor-pointer hover:border-dark-purple hover:bg-white hover:border hover:text-dark-purple translate duration-200 ease-in-out">
              {chatButton}
            </button>
            {chatIcon}
          </div>
        )}
        {buttonTitle && (
          <div className="space-x-4">
            <button
              onClick={handleAddModal}
              className="bg-white border border-dark-purple text-dark-purple px-8 rounded-lg font-semibold py-2 cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out">
              {buttonTitle}
            </button>
            {inviteButton && (
              <button
                onClick={handleAddModal}
                className="bg-dark-purple  text-white px-8 rounded-lg font-semibold py-2 cursor-pointer hover:border-dark-purple hover:bg-white hover:border hover:text-dark-purple translate duration-200 ease-in-out">
                {inviteButton}
              </button>
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default GlobalContainer;
