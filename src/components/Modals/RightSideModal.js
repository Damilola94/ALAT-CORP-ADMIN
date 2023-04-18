import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useCookies } from "react-cookie";
import moment from "moment-timezone";
import { useDispatch } from "react-redux";

import RightModalCard from "../Cards/RightModalCard";
import useGetQuery from "@/hooks/useGetQuery";
import { camelCaseToTitleCase } from "@/utilities/general";
import { onTransactionStatusChange } from "@/redux/transactionSlice";

const RightSideModal = ({
  onClick,
  values,
  memberLoan,
  transactionHistory,
  handleAction,
  handleApproveAction,
}) => {
  const dispatch = useDispatch()
  const [cookie] = useCookies(["data"]);
  const [modal, setModal] = useState(transactionHistory);

  const { data: transData } = useGetQuery({
    endpoint: "Transactions",
    extra: "Id",
    pQuery: { id: values?.id },
    queryKey: ["transactions-id"],
    enabled: !!cookie?.data?.token,
    auth: true,
  });

  const singleData = transData?.data;

  const closeModalHandler = () => {
    onClick();
  };

  const rejectModalHandler = () => {
    setModal(!modal);
    handleAction();
    onClick();
  };

  const verifyModalHandler = () => {
    setModal(!modal);
    handleApproveAction();
    onClick();
    dispatch(onTransactionStatusChange({status:"verify", id:singleData?.id}))
  };

  const approvedModalHandler = () => {
    setModal(!modal);
    handleApproveAction();
    onClick();
    dispatch(onTransactionStatusChange({status:"approve", id:singleData?.id}))
  }

  console.log(singleData)
  return (
    <>
      {modal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={onClick}
            ></div>
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
                  firstValue={
                    singleData?.transactionReference || "Not Provided"
                  }
                  secondKey={"BANK NAME"}
                  secondValue={singleData?.bankName || "Not Provided"}
                />
                <RightModalCard
                  firstKey={"ACCOUNT NUMBER"}
                  firstValue={singleData?.accountNumber || "Not Provided"}
                  secondKey={"ACOOUNT NAME"}
                  secondValue={singleData?.accountName || "Not Provided"}
                />
                <RightModalCard
                  firstKey={"DESCRIPTION"}
                  firstValue={singleData?.description || "Not Provided"}
                  secondKey={"STATUS"}
                  secondValue={
                    camelCaseToTitleCase(singleData?.transactionStatus) ||
                    "Not Provided"
                  }
                />
                <RightModalCard
                  firstKey={"DATE CREATED"}
                  firstValue={
                    `${moment(singleData?.dateCreated).format(
                      "Do MMM, YYYY"
                    )} @ ${moment(singleData?.dateCreated).format("h:mm a")}` ||
                    "Not Provided"
                  }
                  secondKey={"AMOUNT"}
                  secondValue={
                    (singleData?.amount && `₦${singleData?.amount}`) ||
                    "Not Provided"
                  }
                />
                <RightModalCard
                  firstKey={"RAISED BY"}
                  firstValue={singleData?.raisedBy || "Not Provided"}
                  secondKey={""}
                  secondValue={""}
                />
                <RightModalCard
                  firstKey={"Comments"}
                  firstValue={singleData?.comment || "Not Provided"}
                  secondKey={"STATUS"}
                  secondValue={singleData?.transactionStatus}
                  commentName={singleData?.raisedBy || "Not Provided"}
                  comments
                />
                {singleData?.transactionStatus == "verified" ? (
                  <div className="flex  items-center justify-center align-middle bg-white shadow-2xl absolute bottom-0 w-full cursor-pointer">
                    <div
                      className="w-1/2 bg-white h-16 py-6 text-dark-purple  font-semibold"
                      onClick={rejectModalHandler}
                    >
                      REJECT
                    </div>
                    <div
                      className="w-1/2  bg-dark-purple h-16 py-6 text-white font-semibold"
                      onClick={approvedModalHandler}
                    >
                      APPROVE
                    </div>
                  </div>
                ) : singleData?.transactionStatus == "pending" ? (
                  <div className="flex  items-center justify-center align-middle bg-white shadow-2xl absolute bottom-0 w-full cursor-pointer">
                    <div
                      className="w-1/2 bg-white h-16   py-6 text-dark-purple  font-semibold"
                      onClick={rejectModalHandler}
                    >
                      REJECT
                    </div>
                    <div
                      className="w-1/2  bg-dark-purple h-16 py-6 text-white font-semibold"
                      onClick={verifyModalHandler}
                    >
                      VERIFY
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : (
        memberLoan && (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={onClick}
              ></div>
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
                  <div className="bg-white h-fit relative">
                    <RightModalCard
                      firstKey={"DATE REQUESTED"}
                      firstValue={"20th Feb 2023"}
                      secondKey={"TIME"}
                      secondValue={"5:30am"}
                    />
                    <RightModalCard
                      firstKey={"MEMBER’S NAME"}
                      firstValue={"Oladapo John"}
                      secondKey={"LOAN AMOUNT"}
                      secondValue={"₦200,000"}
                    />
                    <RightModalCard
                      firstKey={"INTEREST(%)"}
                      firstValue={"1"}
                      secondKey={"AMOUNT REPAYABLE"}
                      secondValue={"₦202,000"}
                    />
                    <RightModalCard
                      firstKey={"REPAYMENT SCHEDULE"}
                      firstValue={"Monthly"}
                      secondKey={"STATUS"}
                      secondValue={values.STATUS}
                      memberLoan
                    />
                    <RightModalCard
                      firstKey={"PAYMENT TERM"}
                      firstValue={"30 days"}
                      secondKey={
                        values.STATUS === "Rejected" ||
                        values.STATUS === "Disbursed" ||
                        values.STATUS === "Repaid" ||
                        values.STATUS === "Approved"
                          ? "REVIEWED BY"
                          : ""
                      }
                      secondValue={
                        values.STATUS === "Rejected" ||
                        values.STATUS === "Disbursed" ||
                        values.STATUS === "Repaid" ||
                        values.STATUS === "Approved"
                          ? "David John"
                          : ""
                      }
                    />
                    {values.STATUS === "Approved" && (
                      <RightModalCard
                        firstKey={"DATE REVIEWED"}
                        firstValue={"23th Feb 2023"}
                      />
                    )}
                    {values.STATUS === "Rejected" && (
                      <RightModalCard
                        firstKey={"DATE REVIEWED"}
                        firstValue={"23th Feb 2023"}
                      />
                    )}
                    {values.STATUS === "Disbursed" && (
                      <RightModalCard
                        firstKey={"DATE REVIEWED"}
                        firstValue={"23th Feb 2023"}
                        secondKey={"DATE DISBURSED"}
                        secondValue={"24th Feb 2023"}
                      />
                    )}
                    {values.STATUS === "Disbursed" && (
                      <RightModalCard
                        firstKey={"DUE DATE"}
                        firstValue={"24th March 2023"}
                        secondKey={"PERFORMANCE"}
                        secondValue={"Performing"}
                      />
                    )}
                    {values.STATUS === "Repaid" && (
                      <RightModalCard
                        firstKey={"DATE REVIEWED"}
                        firstValue={"23th Feb 2023"}
                        secondKey={"DATE DISBURSED"}
                        secondValue={"24th Feb 2023"}
                      />
                    )}
                    {values.STATUS === "Repaid" && (
                      <RightModalCard
                        firstKey={"DUE DATE"}
                        firstValue={"24th March 2023"}
                        secondKey={"PERFORMANCE"}
                        secondValue={"Performing"}
                      />
                    )}
                    <RightModalCard
                      firstKey={"Document"}
                      firstValue={"Oladapoj-NIN-Card.pdf"}
                      secondValue={values.STATUS}
                      comments
                    />
                    {values.STATUS == "In Review" && (
                      <div className="flex  items-center justify-center align-middle bg-white shadow-2xl absolute bottom-0 right-auto w-2/5 ml-2 cursor-pointer">
                        <div
                          className="w-1/2 bg-white h-16 py-6 text-dark-purple  font-semibold"
                          onClick={rejectModalHandler}
                        >
                          REJECT
                        </div>
                        <div
                          className="w-1/2  bg-dark-purple h-16 py-6 text-white font-semibold"
                          onClick={closeModalHandler}
                        >
                          APPROVE
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default RightSideModal;
