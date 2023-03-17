import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import { FiUploadCloud } from "react-icons/fi";
import { ImDatabase, ImCancelCircle } from "react-icons/im";

import { addBeneficiary, selectValue } from "@/redux/beneficiarySlice";

const UploadModal = ({ onClickModal, upload }) => {
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
      // dispatch(addBeneficiary(excelData));
    }, 5000);
  }, [excelData]);

  return (
    <>
      {upload ? (
        <>
          <div className="fixed inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-5"
              onClick={() => onClickModal()}></div>
            <div className="flex items-center min-h-screen justify-center">
              <div className="relative w-full max-w-3xl mx-auto bg-white shadow-lg  flex h-fit">
                <div className="sm:flex lg:block w-full">
                  <div className="">
                    <div className="w-full shadow-lg bg-white">
                      <div className="p-4 flex justify-between items-center w-full px-8 shadow-lg">
                        <h2 className="text-2xl font-bold w-full text-[#333333]">
                          Upload another file
                        </h2>
                        <div onClick={() => onClickModal()}>
                          <ImCancelCircle className="text-gray-500 w-full text-lg cursor-pointer" />
                        </div>
                      </div>
                      <div>
                        <input
                          type="file"
                          className="hidden w-3 "
                          required
                          ref={fileRef}
                          onChange={handleFile}
                        />
                        <div className="flex flex-col justify-between space-x-16 p-8">
                          <div className="my-5">
                            <div className="">
                              <h5
                                onClick={handleProgressBar}
                                className="font-semibold text-base mb-8 my-4"
                              >
                                Download bulk
                                <span className="text-red-700">
                                  {" "}
                                  template file
                                </span>
                                , containing the expected layout and format of
                                information required
                              </h5>
                              <div
                                className={`flex relative flex-col justify-center items-center w-full h-56 bg-gray-50  border-2 border-dotted border-gray-400 rounded-xl text-gray-400 ${
                                  dragging ? "bg-green-600" : ""
                                }`}
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                              >
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
                                        className="cursor-pointer"
                                      >
                                        Click to upload
                                      </strong>{" "}
                                      or drag and drop
                                    </h3>
                                    <p className="my-3">
                                      Supported Filetype: .CSV, .XLSX
                                    </p>
                                    <p>
                                      (You may upload a file at a limit of 25mb)
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between mt-10">
                            <div></div>
                            <div className="flex space-x-8">
                              <button
                                className="bg-white border border-dark-purple text-dark-purple px-4 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out"
                                onClick={() => onClickModal()}
                              >
                                Cancel
                              </button>
                              <button
                                className="bg-dark-purple text-white px-4 py-2 rounded-lg font-semibold cursor-pointer hover:bg-white hover:text-dark-purple hover:border hover:border-dark-purple translate duration-200 ease-in-out"
                                onClick={() => {}}
                              >
                                Merge file
                              </button>
                            </div>
                          </div>
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
