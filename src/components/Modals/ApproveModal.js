import { useState } from "react";

const ApproveModal = ({ onClick }) => {
  const [showModal, setShowModal] = useState(true);

  const rejectTransaction = () => {
    setShowModal(!showModal);

  };

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(!showModal) }></div>
            <div className="flex items-center min-h-screen">
              <div className="relative w-full max-w-2xl rounded-lg mx-auto bg-white shadow-2xl flex h-80">
                <div className="sm:flex lg:block w-full">
                  <div className="lg:text-left sm:ml-4 sm:text-left m-6 md:text-center">
                    <h4 className="text-xl font-bold text-black">
                      Reason for Rejection
                    </h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-gray-400 mb-6">
                      Please enter your reason for rejecting this transaction
                    </p>
                    <div>
                      <textarea
                        id="message"
                        rows="4"
                        className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-dark-purple focus:border-dark-purple"
                        placeholder="Add comment..."/>
                    </div>
                    <div className="mt-6 gap-3 space-x-3">
                      <button
                        className="mt-1 p-2 flex-1 px-4 text-white bg-dark-purple rounded-md outline-none ring-offset-2 focus:ring-2"
                        onClick={rejectTransaction}>
                        Reject Transaction
                      </button>
                      <button
                        className="mt-1 p-2 flex-1 text-black bg-gray-300  rounded-md outline-none ring-offset-2 focus:ring-2"
                        onClick={rejectTransaction}>
                        Cancel
                      </button>
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

export default ApproveModal;
