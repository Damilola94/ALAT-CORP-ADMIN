import React, { useState } from "react";
import { ImCancelCircle, ImDatabase } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import EmptyState from "../EmptyState";

const BeneficiariesModal = ({ handleBeneficiaryModal, beneficiariesModal }) => {
  const [editData, setEditData] = useState("");
  const [value, setValue] = useState("");

  const onChange = () => {};

  const beneficiaryList = [
    {
      accountName: "David Johnson Igri",
      bankName: "ALATbyWema",
      accountNumber: "0689015678",
    },
    {
      accountName: "Meyene Udoh",
      bankName: "Access Bank",
      accountNumber: "0689015678",
    },
    {
      accountName: "Oladapo Johnson",
      bankName: "Zenith Bank",
      accountNumber: "0689015678",
    },
    {
      accountName: "David John",
      bankName: "Stanbic IBTC Bank",
      accountNumber: "0689015678",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const BeneficiariesCard = ({ item, id }) => {
    const { bankName, accountName, accountNumber } = item;
    return (
      <div key={id} className=" bg-white w-full shadow-md my-6 p-3">
        <h1 className="font-bold text-base">{accountName}</h1>
        <p className="text-gray-500 text-xs my-1">{bankName}</p>
        <p className="text-dark-purple text-sm">{accountNumber}</p>
      </div>
    );
  };

  return (
    <>
      {beneficiariesModal ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => handleBeneficiaryModal()}></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-sm mx-auto bg-white shadow-lg flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8">
                        <h2 className="text-2xl font-bold w-full text-[#333333]">
                          Beneficiaries
                        </h2>
                        <div onClick={() => handleBeneficiaryModal()}>
                          <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    {beneficiaryList.length > 0 ? (
                      <div
                        className="p-5 h-[450px] overflow-y-auto  overflow-x-hidden scrollbar scrollbar-thumb-dark-purple scrollbar-track-gray-200
                        scrollbar-thumb-rounded  rounded-md
                      ">
                        <div className="w-full">
                          <div className="p-2 flex rounded-md border border-input-outline bg-input-fill w-full h-9 items-center">
                            <BsSearch className="text-gray-400 text-sm" />
                            <input
                              className="bg-input-fill outline-none text-sm flex-1 ml-2 w-5/6"
                              value={value || ""}
                              onChange={(e) => {
                                setValue(e.target.value);
                                onChange(e.target.value);
                              }}
                              placeholder="Search"
                            />
                          </div>
                          <div className="flex-row justify-between w-full">
                            {beneficiaryList.map((item, _) => (
                              <BeneficiariesCard item={item} id={_} key={_} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <EmptyState
                          beneficiariesModal
                          icon={
                            <ImDatabase className="text-4xl text-[#C2C9D1]" />
                          }
                          title={"No Beneficiaries added"}
                        />
                      </div>
                    )}
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

export default BeneficiariesModal;
