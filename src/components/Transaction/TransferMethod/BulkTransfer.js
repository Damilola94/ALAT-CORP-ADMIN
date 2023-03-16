import React, { useState } from "react";
import * as XLSX from "xlsx";

const SingleTransfer = () => {
  const [excelData, setExcelData] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
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
      const fileJSON = [];
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const workSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      fileJSON.push(...data);
      setExcelData(fileJSON);
    } else {
      setExcelData(null);
    }
  };

  return (
    <>
      <form className="container horizontal mt-5" 
        <label>onSubmit={handleSummit}>
          <h5>Upload Excel File</h5>
          <br></br>
          <input
            type="file"
            className=""
            required
            onChange={handleFile}></input>
          {excelFileError && <div className="mt-2">{excelFileError}</div>}
          <button type="submit" className="mt-2">
            Submit
          </button>
        </label>
      </form>
      {excelData == null && <p>No File Selected</p>}
      {excelData !== null && <p> File Selected{console.log(excelData)}</p>}
    </>
  );
};

export default SingleTransfer;
