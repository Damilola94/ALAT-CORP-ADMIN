import React, { useContext, useRef, useState } from "react";
import { StepperContext } from "@/contexts/StepperContex";
import * as XLSX from "xlsx";
import { FiUploadCloud } from "react-icons/fi";

import FundTransferTable from "@/components/Tables/FundTransferTable";

const BulkTransferDetails = ({ handleEditModal, handleEditData }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [moreBeneficiary, setMoreBeneficiary] = useState([]);
  const [excelData, setExcelData] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const fileRef = useRef(null);

  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  /** TRIGGER UPLOAD */
  const handleTriggerUpload = () => {
    const input = fileRef.current;
    input.click();
  };

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];

    // Check File Size
    if (selectedFile.size > 2000000) {
      // Notification;
    }

    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types ");
        setExcelData(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  const handleSummit = (e) => {
    e.preventDefault();

    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const workSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    } else {
      setExcelData(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAddMore = () => {
    const addMoreData = [];
    addMoreData.push({ ...userData, id: Date.now() });
    setMoreBeneficiary((prevState) => {
      return [...prevState, ...addMoreData];
    });
    handleEditData(userData);
    setUserData("");
  };

  const handleRemove = (value) => {
    const removedBeneficiary = moreBeneficiary.filter(
      (item) => item.id !== value.id
    );
    setMoreBeneficiary(removedBeneficiary);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <div>
          <h1 className="text-base leading-8 text-gray-500 mb-7">
            <span className="text-black">
              <strong>Step 1: </strong>
            </span>
            Upload an excel file containing transaction details
          </h1>
        </div>
        {moreBeneficiary.length > 0 ? (
          <FundTransferTable
            beneficiaryData={moreBeneficiary}
            handleEditModal={handleEditModal}
            handleRemove={handleRemove}
          />
        ) : (
          ""
        )}
        <div className="w-3/4">
          <div className="flex flex-col justify-between space-x-16">
            <form className="container horizontal mt-5" onSubmit={handleSummit}>
              <label>
                <div className="">
                  <h5 className="font-semibold text-base my-4">
                    Download bulk{" "}
                    <span className="text-red-700">template file</span>,
                    containing the expected layout and format of information
                    required
                  </h5>
                  <div className="flex flex-col justify-center items-center w-full h-56 bg-gray-50  border-2 border-dotted border-gray-400 rounded-xl">
                    <input
                      type="file"
                      className="hidden w-3 "
                      required
                      ref={fileRef}
                      onChange={handleFile}
                    />
                    <FiUploadCloud className="text-4xl" />
                    <h3>
                      <strong onClick={handleTriggerUpload}>
                        Click to upload
                      </strong>{" "}
                      or drag and drop
                    </h3>
                    <p>Supported Filetype: .CSV, .XLSX</p>
                    <p>(You may upload a file at a limit of 25mb)</p>
                  </div>
                  {excelFileError && (
                    <div className="mt-2">{excelFileError}</div>
                  )}
                  <button type="submit" className="mt-2">
                    Submit
                  </button>
                </div>
              </label>
            </form>
            {excelData == null && <p>No File Selected</p>}
            {excelData !== null && (
              <p> File Selected{console.log(excelData)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkTransferDetails;
