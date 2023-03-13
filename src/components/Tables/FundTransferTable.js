import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useRowSelect,
} from "react-table";
import Checkbox from "../Transaction/CheckBox";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

const FundTransferTable = ({
  beneficiaryData,
  handleEditModal,
  handleRemove,
}) => {
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

  const data = useMemo(() => beneficiaryData, [beneficiaryData]);

  const productsData = useMemo(() => [...data], [data]);

  const productsColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0])
            // .filter((key) => key !== "id")
            .map((key) => {
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
                className="pl-4 pr-4 pt-2 pb-2 text-xl text-dark-purple "
                onClick={() => handleEditModal()}>
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
      columns: productsColumns,
      data: productsData,
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
    prepareRow,
    selectedFlatRows,
  } = tableInstance;

  const rowdata = page.length !== 9 ? page : row;
  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {selectedFlatRows.length > 1 && (
        <div className="flex space-x-5 items-center my-5">
          <h2>{`${selectedFlatRows.length} recipients selected`}:</h2>
          <button
            onClick={() => {}}
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
    </>
  );
};

export default FundTransferTable;
