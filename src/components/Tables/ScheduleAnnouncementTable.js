import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useGlobalFilter, useTable, usePagination } from "react-table";
import { ImDatabase } from "react-icons/im";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

import GlobalFilter from "./GlobalFilter";
import Pagination from "./Pagination";
import { MOCK_DUMMY_ANNOUNCEMENT } from "../DummyData";
import EmptyState from "../EmptyState";

const ScheduleAnnouncementTable = ({ handleCreateAnnouncement }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;
      setProducts(products);
    }
  };

  const data = useMemo(() => MOCK_DUMMY_ANNOUNCEMENT, []);

  const transactionData = useMemo(() => [...data], [data]);

  const transactionColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0]).map((key) => {
            return {
              Header: key,
              accessor: key,
            };
          })
        : [],
    [data]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        ...columns,
        {
          id: "ACTION",
          Header: "ACTION",
          Cell: ({ row }) => (
            <div className="flex">
              <button
                className="pl-4 pr-4 pt-2 pb-2 text-xl text-dark-purple"
                onMouseMove={() => {
                  handleMouseOver();
                }}
                onClick={() => handleEditModal(row.values)}>
                <AiOutlineEdit />
              </button>
              <button
                className="pl-4 pr-4 pt-2 pb-2 text-xl text-dark-purple"
                onClick={() => handleRemove(row.values)}>
                <RiDeleteBin7Line />
              </button>
            </div>
          ),
        },
      ];
    });
  };

  const tableInstance = useTable(
    {
      columns: transactionColumns,
      data: transactionData,
    },
    useGlobalFilter,
    tableHooks,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    row,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    gotoPage,
    pageCount,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  const { pageIndex } = state;

  const rowdata = page.length !== 9 ? page : row;

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {transactionData?.length > 0 ? (
        <div>
          <p className="text-[#1D0218] text-sm font-bold mb-4">
            Showing 1 - 50 of 100 Transactions
          </p>
          <div className="flex mt-2 mb-6 items-center">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              setGlobalFilter={setGlobalFilter}
              globalFilter={state.globalFilter}
            />
            <Pagination
              previousPage={previousPage}
              nextPage={nextPage}
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              pageIndex={pageIndex}
              pageOptions={pageOptions}
              gotoPage={gotoPage}
              pageCount={pageCount}
            />
          </div>
          <table
            {...getTableProps()}
            className=" text-base text-gray-900 p-4 w-full">
            <thead className="p-4">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="">
                  {headerGroup.headers.map((column) => (
                    <th
                      className="text-left text-xs p-4 bg-[#F9FAFB] text-[#1D0218]"
                      {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rowdata.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className={`hover:cursor-pointer hover:bg-[#FBF3F5]`}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="border-b border-b-[#E1E5EE] text-xs p-4 font-medium text-[#808080]">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-between my-7 ">
            <Pagination
              previousPage={previousPage}
              nextPage={nextPage}
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              pageIndex={pageIndex}
              pageOptions={pageOptions}
            />
          </div>
        </div>
      ) : (
        <EmptyState
          title={"No announcement created yet "}
          subTitle={"Click “Create Announcement” to send announcement"}
          icon={<ImDatabase className="text-4xl text-[#C2C9D1]" />}
          buttonTitle={"Create Announcement"}
          onClick={handleCreateAnnouncement}
        />
      )}
    </>
  );
};

export default ScheduleAnnouncementTable;
