import React, { useEffect, useState, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useGlobalFilter, useTable, usePagination } from "react-table";
import { ImDatabase } from "react-icons/im";

import GlobalFilter from "../GlobalFilter";
import Pagination from "../Pagination";
import RightSideModal from "../../Modals/RightSideModal";
import EmptyState from "../../EmptyState";
import RejectModal from "../../Modals/RejectModal";
import useGetQuery from "../../../hooks/useGetQuery";
import TransactionPinModal from "../../Modals/TransactionPinModal";
import { camelCaseToTitleCase, capitalize } from "@/utilities/general";
import moment from "moment-timezone";

const TransactionHistoryTable = () => {
  const [cookie] = useCookies(["data"]);
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [approveModal, setApproveModal] = useState(false);
  const [storeData, setStoreData] = useState([]);
  const [newData, setNewData] = useState([]);

  const { data: transData } = useGetQuery({
    endpoint: "transactions",
    pQuery: { pageSize: 1000, cooperativeId: cookie?.data?.cooperativeId },
    queryKey: ["transactions"],
    enabled: !!cookie?.data?.token,
    auth: true,
  });

  useEffect(() => {
    if (transData?.data?.data) {
      setStoreData(transData?.data?.data);
    } else {
      setStoreData([]);
    }
  }, [transData?.data?.data]);

  const data = useMemo(() => storeData, [storeData]);

  useEffect(() => {
    const newData = data.map((item) => {
      const { [Object.keys(item)[0]]: firstProp, ...rest } = item;
      return { ...rest, [Object.keys(item)[0]]: firstProp };
    });
    setNewData(newData);
  }, [data]);

  const transactionData = useMemo(() => [...newData], [newData]);

  const transactionColumns = useMemo(
    () =>
    newData[0]
        ? Object.keys(newData[0])
            .filter(
              (key) =>
                key !== "description" &&
                // key !== "id" &&
                key !== "comment" &&
                key !== "raisedBy" &&
                key !== "transactionReference" &&
                key !== "cooperativeId"
            )
            .map((key) => {
              if(key === "id") {
                return {
                  Header: "",
                  accessor: key,
                  isVisible: false,
                  Cell: ({}) => {
                    return null
                  },
                  show: false,
                }
              }
              if (key === "transactionStatus") {
                return {
                  Header: "STATUS",
                  accessor: key,
                  Cell: ({ value }) => {
                    return (
                      <span
                        className={`text-xs p-1 rounded-lg font-medium ${
                          value === "pending"
                            ? "bg-[#FDF6B2] text-[#723B13]"
                            : value === "success"
                            ? "bg-[#DEF7EC] p-2 text-[#03543F]"
                            : value === "declined"
                            ? "bg-[#F3F4F6] text-[#111928]"
                            : value === "verified"
                            ? "bg-[#E1EFFE] text-[#1E429F]"
                            : value === "failed"
                            ? "bg-[#FDE8E8] text-[#9B1C1C]"
                            : ""
                        }`}
                      >
                        {capitalize(value)}
                      </span>
                    );
                  },
                };
              }
              if (key === "amount") {
                return {
                  Header: "AMOUNT",
                  accessor: key,
                  Cell: ({ value }) => {
                    return `₦${value}`;
                  },
                };
              }
              if (key === "dateCreated") {
                return {
                  Header: "DATE",
                  accessor: key,
                  Cell: ({ value }) => {
                    return moment(value).format('Do MMM, YYYY');
                  },
                };
              }
              if(key === "timeCreated"){
                return {
                  Header: "TIME",
                  accessor: key,
                  Cell: ({ value }) => {
                    return moment(value).format('h:mm a');
                  },
                };
              }
              const headerKey = camelCaseToTitleCase(key).toUpperCase();
              return {
                Header: headerKey,
                accessor: key,
              };
            })
        : [],
    [newData]
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

  const closeModalHandler = () => {
    setShowModal(!showModal);
    setContent("");
  };

  const handleRejectAction = () => {
    setModal(!modal);
  };

  const handleApproveAction = () => {
    setApproveModal(!approveModal);
  };

  const rightSideModalHandler = (row) => {
    setShowModal(!showModal);
    const { values } = row;
    setContent(
      <RightSideModal
        values={values}
        onClick={closeModalHandler}
        transactionHistory
        showModal={showModal}
        handleAction={handleRejectAction}
        handleApproveAction={handleApproveAction}
      />
    );
  };

  return (
    <>
      {content}
      {modal && <RejectModal modal={modal} onClick={handleRejectAction} />}
      {approveModal && (
        <TransactionPinModal
          approveModal={approveModal}
          onClick={handleApproveAction}
        />
      )}
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
            className=" text-base text-gray-900 p-4 w-full"
          >
            <thead className="p-4">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="">
                  {headerGroup.headers.map((column) => (
                    <th
                      className={`text-left text-xs p-4 bg-[#F9FAFB] text-[#1D0218]`}
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
          title={"You have no transactions"}
          subTitle={
            "You haven’t made any transactions yet. when you do, they’ll appear here "
          }
          icon={<ImDatabase className="text-4xl text-[#C2C9D1]" />}
        />
      )}
    </>
  );
};

export default TransactionHistoryTable;
