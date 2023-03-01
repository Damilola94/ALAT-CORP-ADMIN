import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";
import { MdExpandMore } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Remittance",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#1BA926",
    },
  ],
};

const Middle = () => {
  return (
    <div className="bg-white  shadow-sm w-8/12 border rounded-xl border-gray-200">
      <div className="flex border-b p-3 border-gray-300 justify-between align-middle items-center ">
        <p className="text-lg font-bold text-[#3E0434]">
          Remmitance Per Month
        </p>
        <div className="flex items-center rounded-md align-middle p-3 border border-gray-300">
          <CgCalendarDates className="mr-2" />
          <p>This Month</p>
          <MdExpandMore className="ml-2 cursor-pointer" />
        </div>
      </div>
      <div className=" mt-5 p-2">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Middle;
