import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useRowSelect,
} from "react-table";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";

import { selectValue } from "../../redux/beneficiarySlice";
import Checkbox from "../Transaction/CheckBox";
import GlobalFilter from "./GlobalFilter";
import Pagination from "./Pagination";
import UploadAction from "../Transaction/BulkTransferSteps/UploadAction";
import ConfirmModal from "../Modals/ConfirmModal";

const FundTransferTable = ({
  handleEditModal,
  handleRemove,
  confirmDetails,
  setMoreBeneficiary,
  bulkTransferDetails,
}) => {
  const [products, setProducts] = useState([]);
  const tableData = useSelector(selectValue);
  const [hoverState, setHoverState] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    if (response) {
      const products = response.data;
      setProducts(products);
    }
  };

  const data = useMemo(() => tableData, [tableData]);

  const transactionData = useMemo(() => [...data], [data]);

  const transactionColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0]).map((key) => {
            return {
              Header: key.toUpperCase(),
              accessor: key,
            };
          })
        : [],
    [data]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
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
    !confirmDetails && tableHooks,
    usePagination,
    useRowSelect
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
    gotoPage,
    pageCount,
    prepareRow,
    selectedFlatRows,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  const { pageIndex } = state;

  const rowdata = page.length !== 9 ? page : row;

  const handleMultipleDelete = () => {
    const result = tableData.filter((val) => {
      return !selectedFlatRows.find((a) => {
        return val["s/n"] === a.values["s/n"];
      });
    });
    setMoreBeneficiary(result);
  };

  const handleMouseOver = () => {
    setHoverState(!hoverState);
  };

  const handleUploadModal = () => {
    setConfirmModal(!confirmModal);
  };

  const handleCancelModal = () => {
    setCancelModal(!cancelModal);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {confirmModal && (
        <ConfirmModal
          handleClick={handleUploadModal}
          confirmModal={confirmModal}
          subTitle={"Are you sure you want to clear this upload?"}
        />
      )}
      {cancelModal && (
        <ConfirmModal
          handleClick={handleCancelModal}
          cancelModal={cancelModal}
          subTitle={
            "Are you sure you want to upload another file? The current details will be deleted"
          }
        />
      )}
      {bulkTransferDetails && (
        <UploadAction
          handleUploadModal={handleUploadModal}
          handleCancelModal={handleCancelModal}
        />
      )}
      {bulkTransferDetails && (
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
        </div>
      )}
      {selectedFlatRows.length > 1 && (
        <div className="flex space-x-5 items-center my-5">
          <h2>{`${selectedFlatRows.length} recipients selected`}:</h2>
          <button
            onClick={() => handleMultipleDelete()}
            className="bg-[#E24D4D] text-white uppercase px-10 py-2 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out">
            Delete
          </button>
        </div>
      )}
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
                onClick={() => {}}
                className={`hover:cursor-pointer hover:bg-[#FBF3F5]`}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="border-b border-[#E1E5EE] text-xs p-4 font-medium text-[#808080]">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {bulkTransferDetails && (
        <div className="flex justify-between my-7 ">
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
      )}
    </>
  );
};

export default FundTransferTable;
