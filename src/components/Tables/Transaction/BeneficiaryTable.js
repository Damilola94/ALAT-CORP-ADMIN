import React, { useEffect, useState, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useGlobalFilter, useTable, usePagination } from "react-table";
import { ImDatabase } from "react-icons/im";
import _ from "lodash";

import GlobalFilter from "../GlobalFilter";
import Pagination from "../Pagination";
import EmptyState from "../../EmptyState";
import ConfirmModal from "../../Modals/ConfirmModal";
import AddBeneficiaryModal from "../../Modals/AddBeneficiaryModal";
import { useSelector, useDispatch } from "react-redux";
import {
  savedBeneficiaryListValue,
  savedBeneficiary,
} from "@/redux/transactionSlice";
import useGetQuery from "../../../hooks/useGetQuery";
import { camelCaseToTitleCase } from "@/utilities/general";

const BeneficiaryTable = ({}) => {
  const [cookie] = useCookies(["data"]);
  const [confirmModal, setConfirmModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState("");
  const beneficiaryData = useSelector(savedBeneficiaryListValue);
  const [newData, setNewData] = useState([]);

  const { data: beneData } = useGetQuery({
    endpoint: "transactions",
    extra: "get-beneficiaries",
    pQuery: { cooperativeId: cookie?.data?.cooperativeId },
    queryKey: ["beneficiaries"],
    enabled: !!cookie?.data?.token,
    auth: true,
  });

  useEffect(() => {
    dispatch(savedBeneficiary(beneData?.data?.data || []));
  }, [beneData]);

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  const data = useMemo(
    () => beneficiaryData,
    [beneficiaryData, beneData?.data?.data]
  );

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
                // key !== "id" &&
                key !== "cooperativeId"
            )
            .map((key) => {
              if (key === "id") {
                return {
                  Header: "",
                  accessor: key,
                  isVisible: false,
                  Cell: ({}) => {
                    return null;
                  },
                  show: false,
                };
              }
              const headerKey = camelCaseToTitleCase(key).toUpperCase();
              if (key === "id") {
                return {
                  Header: headerKey,
                  accessor: key,
                  show: false,
                };
              } else {
                return {
                  Header: headerKey,
                  accessor: key,
                };
              }
            })
        : [],
    [newData]
  );

  const handleDelete = (value) => {
    console.log(value);
    setConfirmModal(!confirmModal);
    setDeleteId(value);
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
                onClick={() => handleDelete(row.values)}
              >
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

  return (
    <>
      {confirmModal && (
        <ConfirmModal
          deleteId={deleteId}
          handleClick={handleDelete}
          confirmModal={confirmModal}
          subTitle={"Are you sure you want to delete this account?"}
        />
      )}
      {addModal && (
        <AddBeneficiaryModal
          handleAddModal={handleAddModal}
          addModal={addModal}
        />
      )}
      {transactionData?.length > 0 ? (
        <div>
          <p className="text-[#1D0218] text-sm font-bold mb-4">
            Showing 1 - 50 of 100 Beneficiary
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
            />
          </div>
        </div>
      ) : (
        <EmptyState
          title={"No Beneficiaries added"}
          subTitle={"Click “Add Beneficiary” to add a beneficiary to account"}
          icon={<ImDatabase className="text-4xl text-[#C2C9D1]" />}
          buttonTitle={"Add Beneficiary"}
          onClick={handleAddModal}
        />
      )}
    </>
  );
};

export default BeneficiaryTable;
