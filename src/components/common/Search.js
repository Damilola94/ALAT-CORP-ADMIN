import "regenerator-runtime/runtime";

import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { BsSearch } from "react-icons/bs";

const Search = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  // const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
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
  );
};

export default Search;
