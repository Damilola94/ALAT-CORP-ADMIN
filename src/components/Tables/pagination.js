import React, { useState } from "react";

const Pagination = ({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageOptions,
}) => {
  return (
    <div className="flex ml-auto items-center">
      <p className="text-gray-500 text-sm font-medium">
        Showing{" "}
        <strong>
          {pageIndex + 1} of {pageOptions?.length}
        </strong>{" "}
      </p>
      <ul className="inline-flex -space-x-px ml-2">
        <button
          className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={!canPreviousPage}
          onClick={() => previousPage()}>
          Previous
        </button>
        <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          1
        </button>
        <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          2
        </button>
        <li className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
          3
        </li>
        <button
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
        disabled={!canNextPage} onClick={() => nextPage()}"
          disabled={!canNextPage}
          onClick={() => nextPage()}>
          Next
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
