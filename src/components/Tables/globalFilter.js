import "regenerator-runtime/runtime";

import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  // const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <div className="flex">
      <div className="p-2 flex rounded-md border border-input-outline bg-input-fill w-5/6 h-9 items-center">
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
      <div className="flex items-center justify-center ml-4 hover:cursor-pointer border-input-outline rounded-md border p-1 flex-none w-10 h-9 text-gray-400 ">
        <FiFilter className="text-xl" />
      </div>
    </div>
  );
};

export default GlobalFilter;
