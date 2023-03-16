import React from "react";
import { ImCancelCircle } from "react-icons/im";

const UploadModal = ({ onClickModal, upload }) => {
  console.log(upload, "upload");
  return (
    <>
      {upload ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => onClickModal()}></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-3xl mx-auto bg-white shadow-lg  flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8">
                        <h2 className="text-2xl font-bold w-full text-[#333333]">
                          Upload another file
                        </h2>
                        <div onClick={() => onClickModal()}>
                          <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                        </div>
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

export default UploadModal;
