import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
// import tw from "twin.macro";
import { useTable } from "react-table";

const Tables = () => {
  const [products, setProducts] = useState([]);

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
        "BANK NAME": "ALATbyWema",
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
        "BANK NAME": "ALATbyWema",
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
        "BANK NAME": "Access",
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
        "BANK NAME": "ALATbyWema",
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
        "BANK NAME": "ALATbyWema",
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
        "BANK NAME": "UBA",
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
        "BANK NAME": "ALATbyWema",
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
        "BANK NAME": "ALATbyWema",
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
        "BANK NAME": "Stanbic IBTC",
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
        "BANK NAME": "Zenith",
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
              return {
                Header: key,
                accessor: key,
              };
            })
        : [],
    [data]
  );
  const tableInstance = useTable({
    columns: productsColumns,
    data: productsData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    fetchProducts();
  }, []);

  const isEven = (idx) => idx % 2 === 0;

  return (
    <>
      <table
        {...getTableProps()}
        className="tables-fixed text-base text-gray-900 p-2">
        <thead className="p-1">
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
                {...row.getRowProps()}
                className={`hover:cursor-pointer ${
                  isEven(idx) ? "bg-gray-400 bg-opacity-10" : ""
                }`}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="border border-[#E1E5EE] text-xs p-3 font-medium text-[#808080]">
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

export default Tables;
