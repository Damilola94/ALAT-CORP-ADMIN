import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useGlobalFilter, useTable } from "react-table";
import GlobalFilter from "./globalFilter";
import Pagination from "./pagination";
import RightSideModal from "../RightSideModal";

const Tables = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;
      console.log("Products: ", products);
      setProducts(products);
    }
  };

  const data = useMemo(
    () => [
      {
        id: 1,
        "S/N": 1,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "ALATbyWema",
          BANK_IMAGE: "/bank-logo/alat.jfif",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Pending Verification",
        "RAISED BY": "David John",
      },
      {
        id: 2,
        "S/N": 2,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "ALATbyWema",
          BANK_IMAGE: "/bank-logo/alat.jfif",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Failed",
        "RAISED BY": "David John",
      },
      {
        id: 3,
        "S/N": 3,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "Access",
          BANK_IMAGE: "/bank-logo/access.png",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Failed",
        "RAISED BY": "David John",
      },
      {
        id: 4,
        "S/N": 4,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "Access",
          BANK_IMAGE: "/bank-logo/access.png",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Pending Verification",
        "RAISED BY": "David John",
      },
      {
        id: 5,
        "S/N": 5,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "Access",
          BANK_IMAGE: "/bank-logo/access.png",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Declined",
        "RAISED BY": "David John",
      },
      {
        id: 6,
        "S/N": 6,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "UBA",
          BANK_IMAGE: "/bank-logo/uba.png",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Pending Verification",
        "RAISED BY": "David John",
      },
      {
        id: 7,
        "S/N": 7,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "ALATbyWema",
          BANK_IMAGE: "/bank-logo/alat.jfif",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Success",
        "RAISED BY": "David John",
      },
      {
        id: 8,
        "S/N": 8,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "ALATbyWema",
          BANK_IMAGE: "/bank-logo/alat.jfif",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Pending Verification",
        "RAISED BY": "David John",
      },
      {
        id: 9,
        "S/N": 9,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "Stanbic IBTC",
          BANK_IMAGE: "/bank-logo/stanbic.jfif",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Pending Verification",
        "RAISED BY": "David John",
      },
      {
        id: 10,
        "S/N": 10,
        DATE: "20 Feb, 2023 @5:30am",
        "TRANSACTION ID": "TR-637153993...",
        "BANK NAME": {
          BANK_NAME: "Zenith",
          BANK_IMAGE: "/bank-logo/zenith.png",
        },
        "ACCOUNT NUMBER": 2190404040,
        "ACCOUNT NAME": "Oladapo John",
        AMOUNT: "₦200,000",
        STATUS: "Pending Verification",
        "RAISED BY": "David John",
      },
    ],
    []
  );

  const productsData = useMemo(() => [...data], [data]);

  const productsColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0])
            .filter((key) => key !== "id")
            .map((key) => {
              if (key === "BANK NAME")
                return {
                  Header: key,
                  accessor: key,
                  Cell: ({ value }) => {
                    return (
                      <div className="flex items-center">
                        <img src={value.BANK_IMAGE} className="w-5 h-5" />
                        <p className="text-xs p-2 font-medium text-[#808080]">
                          {value.BANK_NAME}
                        </p>
                      </div>
                    );
                  },
                  maxWith: 1,
                };
              else if (key === "STATUS") {
                return {
                  Header: key,
                  accessor: key,
                  Cell: ({ value }) => {
                    return (
                      <span
                        className={`text-xs p-1 rounded-lg font-medium ${
                          value === "Pending Verification"
                            ? "bg-[#FDF6B2]"
                            : value === "Success"
                            ? "bg-[#DEF7EC] p-2"
                            : value === "Declined"
                            ? "bg-[#F3F4F6]"
                            : value === "Failed"
                            ? "bg-[#FDE8E8]"
                            : ""
                        } ${
                          value === "Pending Verification"
                            ? "text-[#723B13]"
                            : value === "Success"
                            ? "text-[#03543F]"
                            : value === "Declined"
                            ? "text-[#111928]"
                            : value === "Failed"
                            ? "text-[#9B1C1C]"
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
  const tableInstance = useTable(
    {
      columns: productsColumns,
      data: productsData,
    },
    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  useEffect(() => {
    fetchProducts();
  }, []);

  const isEven = (idx) => idx % 2 === 0;

  const rightSideModalHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && <RightSideModal onClick={rightSideModalHandler} />}
      <p className="text-[#1D0218] text-sm font-bold mb-4">
        Showing 1 - 50 of 100 Transactions
      </p>
      <div className="flex mt-2 mb-6 items-center">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
        <Pagination />
      </div>
      <table
        {...getTableProps()}
        className=" text-base text-gray-900 p-4 w-full">
        <thead className="p-4">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="">
              {headerGroup.headers.map((column) => (
                <th
                  className="text-xs p-2 bg-[#F9FAFB] text-[#1D0218]"
                  {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <tr
                onClick={rightSideModalHandler}
                {...row.getRowProps()}
                className={`hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-50  ${
                  isEven(idx) ? "bg-gray-300 bg-opacity-10" : ""
                }`}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="border border-[#E1E5EE] text-xs p-4 font-medium text-[#808080]">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between my-7 ">
        <div></div>
        <Pagination />
      </div>
    </>
  );
};

export default Tables;
