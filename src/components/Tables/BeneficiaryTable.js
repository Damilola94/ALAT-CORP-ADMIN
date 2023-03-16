import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useGlobalFilter, useTable, usePagination } from "react-table";
import { ImDatabase } from "react-icons/im";

import GlobalFilter from "./GlobalFilter";
import Pagination from "./Pagination";
import { MOCK_DUMMY_BENEFICIARY } from "../DummyData";
import EmptyState from "../EmptyState";
import ConfirmModal from "../Modals/ConfirmModal";

const BeneficiaryTable = ({ handleAddModal }) => {
  const [products, setProducts] = useState([]);
  const [confirmModal, setConfirmModal] = useState(false);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;
      setProducts(products);
    }
  };

  const data = useMemo(() => MOCK_DUMMY_BENEFICIARY, []);

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

  const handleDelete = () => {
    setConfirmModal(!confirmModal);
  };

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        ...columns,
        {
          id: "ACTION",
          Header: "ACTION",
          Cell: ({ row }) => (
            <div className="flex">
              <h1
                className="text-xs text-[#E24D4D]"
                onClick={() => handleDelete(row.values)}>
                Delete Account
              </h1>
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
      {confirmModal && (
        <ConfirmModal
          handleDelete={handleDelete}
          confirmModal={confirmModal}
          subTitle={"Are you sure you want to delete this account?"}
        />
      )}
      {transactionData.length > 0 ? (
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
          title={"No Beneficiaries added"}
          subTitle={" Click “Add Beneficiary” to add a beneficiary to account"}
          icon={<ImDatabase className="text-4xl text-[#C2C9D1]" />}
          buttonTitle={"Add Beneficiary"}
          onClick={handleAddModal}
        />
      )}
    </>
  );
};

export default BeneficiaryTable;
