import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useGlobalFilter, useTable, usePagination } from "react-table";
import { ImDatabase } from "react-icons/im";

import GlobalFilter from "../GlobalFilter";
import Pagination from "../Pagination";
import RightSideModal from "../../Modals/RightSideModal";
import { MOCK_DUMMY_MEMBER_LOAN_HISTORY } from "../../DummyData";
import EmptyState from "../../EmptyState";

const MemberLoanTable = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [content, setContent] = useState("");

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;
      setProducts(products);
    }
  };

  const data = useMemo(() => MOCK_DUMMY_MEMBER_LOAN_HISTORY, []);

  const transactionData = useMemo(() => [...data], [data]);

  const transactionColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0])
            .filter(
              (key) =>
                key !== "id" && key !== "TRANSACTION ID" && key !== "RAISED BY"
            )
            .map((key) => {
              if (key === "STATUS") {
                return {
                  Header: key,
                  accessor: key,
                  Cell: ({ value }) => {
                    return (
                      <span
                        className={`text-xs p-1.5 rounded-lg font-medium ${
                          value === "In Review"
                            ? "bg-[#FDF6B2] text-[#723B13]"
                            : value === "Disbursed"
                            ? "bg-[#DEF7EC]  text-[#03543F]"
                            : value === "Approved"
                            ? "bg-[#E1EFFE] text-[#1E429F]"
                            : value === "Repaid"
                            ? "bg-[#EDEBFE] text-[#5521B5]"
                            : value === "Rejected"
                            ? "bg-[#FDE8E8] text-[#9B1C1C]"
                            : ""
                        }`}
                      >
                        {value}
                      </span>
                    );
                  },
                };
              }
              return {
                Header: key,
                accessor: key,
              };
            })
        : [],
    [data]
  );
  const tableInstance = useTable(
    {
      columns: transactionColumns,
      data: transactionData,
    },
    useGlobalFilter,
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
    gotoPage,
    pageCount,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  const { pageIndex } = state;

  const rowdata = page.length !== 9 ? page : row;

  useEffect(() => {
    fetchProducts();
  }, []);

  const closeModalHandler = () => {
    setContent("");
  };  

  const rightSideModalHandler = (row) => {
    setShowModal(!showModal)
    const { values } = row;
    setContent(<RightSideModal values={values} onClick={closeModalHandler} showModal={showModal} memberLoan/>);
  };

  return (
    <>
      {transactionData?.length > 0 ? (
        <div>
          {content}
          <p className="text-[#1D0218] text-sm font-bold mb-4">
            Showing 1 - 50 of 100 Loans
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
            className=" text-base text-gray-900 p-4 w-full"
          >
            <thead className="p-4">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="">
                  {headerGroup.headers.map((column) => (
                    <th
                      className="text-left text-xs p-4 bg-[#F9FAFB] text-[#1D0218]"
                      {...column.getHeaderProps()}
                    >
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
                    onClick={() => {
                      rightSideModalHandler(row);
                    }}
                    className={`hover:cursor-pointer hover:bg-[#FBF3F5]`}
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="border-b border-b-[#E1E5EE] text-xs p-4 font-medium text-[#808080]"
                      >
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
              gotoPage={gotoPage}
              pageCount={pageCount}
            />
          </div>
        </div>
      ) : (
        <EmptyState
          title={"You have no Member Loan"}
          subTitle={
            "You haven’t made any member loan yet. when you do, they’ll appear here "
          }
          icon={<ImDatabase className="text-4xl text-[#C2C9D1]" />}
        />
      )}
    </>
  );
};

export default MemberLoanTable;
