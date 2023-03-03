import React, { useState } from "react";

const Pagination = ({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageOptions,
  gotoPage,
}) => {
  const [pageHover, setPageHover] = useState(1);

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
          className="px-3 py-2 ml-0 text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          disabled={!canPreviousPage}
          onClick={() => previousPage()}>
          Previous
        </button>
        <button
          type="button"
          disabled={!canPreviousPage}
          onClick={() => {
            setPageHover(1);
            gotoPage(0);
          }}
          className={`px-3 py-2 bg-white border border-gray-300  ${
            pageHover === 1 && "text-dark-purple bg-[#f1c3cf6b]"
          } hover:text-white hover:bg-dark-purple`}>
          1
        </button>
        <button
          type="button"
          disabled={!canNextPage}
          onClick={() => {
            setPageHover(2);
            gotoPage(1);
          }}
          className={`px-3 py-2 bg-white border border-gray-300 hover:text-white hover:bg-dark-purple 
          ${pageHover === 2 && "text-dark-purple bg-[#f1c3cf6b]"} `}>
          2
        </button>
        <button
          disabled={!canPreviousPage}
          onClick={() => {
            setPageHover(3);
            gotoPage(3);
          }}
          className={`px-3 py-2 bg-white border border-gray-300 hover:text-white hover:bg-dark-purple ${
            pageHover === 3 && "text-dark-purple bg-[#f1c3cf6b]"
          }`}>
          3
        </button>
        <button
          className="px-3 py-2 ml-0 text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          disabled={!canNextPage}
          onClick={() => nextPage()}>
          Next
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
