import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import RightModalCard from "../Cards/RightModalCard";
import ApproveModal from "../Modals/ApproveModal";

const RightSideModal = ({ onClick, values }) => {
  const [showModal, setShoModal] = useState(true);
  const [content, setContent] = useState("");

  const closeModalHandler = () => {
    setShoModal(!showModal);
  };

  const rightSideModalHandler = () => {
    setContent(<ApproveModal onClick={closeModalHandler} />);
  };

  return (
    <>
      {content}
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
                  firstKey={"DESCRIPTION"}
                  firstValue={"Dividends"}
                  secondKey={"STATUS"}
                  secondValue={values.STATUS}
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
                <RightModalCard
                  firstKey={"Comments"}
                  firstValue={
                    "This transaction was rejected because it’s a duplicate"
                  }
                  secondKey={"STATUS"}
                  secondValue={values.STATUS}
                  commentName={"Greg J"}
                  comments
                />
                {values.STATUS == "Pending" && (
                  <div className="flex  items-center justify-center align-middle bg-white shadow-2xl absolute bottom-0 w-full cursor-pointer">
                    <div
                      className="w-1/2 bg-white h-16   py-6 text-dark-purple  font-semibold"
                      onClick={rightSideModalHandler}>
                      REJECT
                    </div>
                    <div
                      className="w-1/2  bg-dark-purple h-16 py-6 text-white font-semibold"
                      onClick={closeModalHandler}>
                      APPROVE
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RightSideModal;
