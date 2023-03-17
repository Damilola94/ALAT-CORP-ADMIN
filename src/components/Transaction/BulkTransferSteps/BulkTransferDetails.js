import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import { FiUploadCloud } from "react-icons/fi";
import { ImDatabase } from "react-icons/im";

import FundTransferTable from "@/components/Tables/FundTransferTable";
import { addBeneficiary, selectValue } from "@/redux/beneficiarySlice";

const BulkTransferDetails = ({ handleEditModal }) => {
  const dispatch = useDispatch();
  const tableData = useSelector(selectValue);

  const [progress, setProgress] = useState(0);
  const [moreBeneficiary, setMoreBeneficiary] = useState([]);
  const [excelFileName, setExcelFileName] = useState("");
  const [excelData, setExcelData] = useState([]);
  const [excelFileError, setExcelFileError] = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef(null);

  const handleProgressBar = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  useEffect(() => {
    handleProgressBar();
  }, [progress]);

  const content = (
    <div className="w-1/2 h-2 border border-1 m-5 border-dark-purple rounded-md">
      <div
        className="rounded-md h-2 bg-dark-purple"
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const selectedFile = Array.from(e.dataTransfer.files);
    const selectedFileIndex = selectedFile[0];

    if (selectedFile && fileType.includes(selectedFileIndex.type)) {
      const { name: selectedFileName } = selectedFileIndex;
      setExcelFileName(selectedFileName);
    }

    // handle dropped files
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFileIndex.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFileIndex);
        reader.onload = (e) => {
          const fileJSON = [];
          const excelFile = e.target.result;
          const workbook = XLSX.read(excelFile, { type: "buffer" });
          const workSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[workSheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          fileJSON.push(...data);
          setExcelData(fileJSON);
        };
      } else {
        setExcelFileError("Please select only excel file types ");
        setExcelData([]);
        setTimeout(() => {
          setExcelFileError(null);
        }, 2000);
      }
    } else {
      console.log("Please select your file");
    }
  };

  /** TRIGGER UPLOAD */
  const handleTriggerUpload = () => {
    const input = fileRef.current;
    input.click();
  };

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && fileType.includes(selectedFile.type)) {
      const { name: selectedFileName } = selectedFile;
      setExcelFileName(selectedFileName);
    }

    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          const fileJSON = [];
          const excelFile = e.target.result;
          const workbook = XLSX.read(excelFile, { type: "buffer" });
          const workSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[workSheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          fileJSON.push(...data);
          setExcelData(fileJSON);
        };
      } else {
        setExcelFileError("File format not supported, please try again");
        setExcelData([]);
        setTimeout(() => {
          setExcelFileError(null);
        }, 5000);
      }
    } else {
      console.log("Please select your file");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(addBeneficiary(excelData));
    }, 5000);
  }, [excelData]);

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
        {tableData.length > 0 ? (
          <FundTransferTable
            beneficiaryData={moreBeneficiary}
            handleEditModal={handleEditModal}
            handleRemove={handleRemove}
            bulkTransferDetails
          />
        ) : (
          <div className="w-3/4">
            <input
              type="file"
              className="hidden w-3 "
              required
              ref={fileRef}
              onChange={handleFile}
            />
            <div className="flex flex-col justify-between space-x-16">
              <div className="my-5">
                <div className="">
                  <h5
                    onClick={handleProgressBar}
                    className="font-semibold text-base mb-8 my-4">
                    Download bulk
                    <span className="text-red-700"> template file</span>,
                    containing the expected layout and format of information
                    required
                  </h5>
                  <div
                    className={`flex relative flex-col justify-center items-center w-full h-56 bg-gray-50  border-2 border-dotted border-gray-400 rounded-xl text-gray-400 ${
                      dragging ? "bg-green-600" : ""
                    }`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}>
                    {excelFileError && (
                      <div className="flex -mt-2 p-2 bg-[#FEF5F4] w-full rounded-t-xl text-base text-[#E24D4D] items-center justify-center">
                        <ImDatabase className="text-base mr-3" />
                        {excelFileError}
                      </div>
                    )}
                    {excelFileName && excelFileError === null ? (
                      <div className="w-full flex flex-col items-center justify-center">
                        <div>{`You have uploaded: ${excelFileName}`}</div>
                        <div>{`Please wait while we process ${excelFileName} for bulk transfer`}</div>
                        {content}
                      </div>
                    ) : (
                      <div className="flex flex-col justify-center items-center text-center w-full">
                        <FiUploadCloud className="text-4xl  text-center my-6" />
                        <h3>
                          <strong
                            onClick={handleTriggerUpload}
                            className="cursor-pointer">
                            Click to upload
                          </strong>{" "}
                          or drag and drop
                        </h3>
                        <p className="my-3">Supported Filetype: .CSV, .XLSX</p>
                        <p>(You may upload a file at a limit of 25mb)</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col w-full bg-light-purple  text-dark-purple rounded-xl mt-10 p-5">
                <div className="flex items-center">
                  <FiUploadCloud className="text-xl mr-2" />
                  <p className="font-bold text-lg">Important Note</p>
                </div>
                <div className="mt-2">
                  <p className="text-base">
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BulkTransferDetails;
