import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useRowSelect,
} from "react-table";
import { useRouter } from "next/router";

import GlobalFilter from "../../GlobalFilter";
import Pagination from "../../Pagination";
import { MOCK_MEMBERS } from "../../../DummyData";
import EmptyState from "../../../EmptyState";
import Checkbox from "../../../common/CheckBox";
import DeleteMemberModal from "../../../Modals/DeleteMemberModal";

const MembersTable = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    setModal(!modal);
  };

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;
      setProducts(products);
    }
  };

  const data = useMemo(() => MOCK_MEMBERS, []);

  const membersData = useMemo(() => [...data], [data]);

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
                        className={`text-xs p-1 rounded-lg font-medium ${
                          value === "Active"
                            ? "bg-[#DEF7EC] text-[#03543F]"
                            : value === "Disabled"
                            ? "bg-[#FDE8E8] text-[#9B1C1C]"
                            : ""
                        }`}>
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
  
  const actionOptions = [
    { label: "View Details", value: "view" },
    { label: "Delete User", value: "delete" },
  ];

  const handleOnchange = (event, row) => {
    const selectedOption = event.target.value;
    if (selectedOption === "view") {
      router.push("/users/11");
    } else {
      setModal(!modal);
    }
  };

  const ActionDropdown = ({ row }) => {
    return (
      <>
        <select
          defaultValue=""
          onChange={handleOnchange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-purple w-11 focus:border-dark-purple block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring--dark-purple dark:focus:border-dark-purple">
          <option
            value=""
            disabled
            hidden
            className="font-bold text-dark-purple">
            ...
          </option>
          {actionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  };

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
              <ActionDropdown row={row} />
            </div>
          ),
        },
      ];
    });
  };

  const tableInstance = useTable(
    {
      columns: transactionColumns,
      data: membersData,
    },
    useGlobalFilter,
    tableHooks,
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {modal && <DeleteMemberModal handleDelete={handleDelete} modal={modal} />}
      {membersData?.length > 0 ? (
        <div>
          <p className="text-[#1D0218] text-sm font-bold mb-4">
            Showing 1 - 50 of 100 Members
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
              gotoPage={gotoPage}
              pageCount={pageCount}
            />
          </div>
        </div>
      ) : (
        <EmptyState
          title={"You have no member in your member directory"}
          subTitle={
            "You haven’t made any transactions yet. when you do, they’ll appear here "
          }
          icon={<ImDatabase className="text-4xl text-[#C2C9D1]" />}
        />
      )}
    </>
  );
};

export default MembersTable;
