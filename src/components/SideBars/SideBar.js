import { useState } from "react";
import Link from "next/link";
import { BsArrowLeftShort, BsChatSquareQuote } from "react-icons/bs";
import {
  AiFillFolderOpen,
  AiOutlineSetting,
  AiFillCaretRight,
} from "react-icons/ai";
import { RiDashboardLine, RiLogoutBoxFill } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import { FaUser, FaLink, FaWallet } from "react-icons/fa";
import { IoIosColorFilter } from "react-icons/io";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen1, setSubmenuOpen1] = useState(false);
  const [submenuOpen2, setSubmenuOpen2] = useState(false);
  const [submenuOpen3, setSubmenuOpen3] = useState(false);

  const Menus = [
    {
      title: "Dashboard",
      icon: <RiDashboardLine />,
      url: "/dashboard",
    },
    {
      title: "Transactions",
      icon: <FaWallet />,
      url: "#",
      submenu1: true,
      submenuTitle: "Transactions",
      submenuItems: [
        {
          title: "Transaction History",
          url: "/transaction/transaction-history",
        },
        {
          title: "Funds Transfer",
          url: "/transaction/fund-transfer",
        },
      ],
    },
    {
      title: "Loan Management",
      url: "/dashboard",
      spacing: true,
      icon: <FaWallet />,
    },
    {
      title: "Communications",
      url: "#",
      icon: <BsChatSquareQuote />,
      submenu2: true,
      submenuItems: [
        { title: "Communications 1" },
        { title: "Communications 2" },
      ],
    },
    {
      title: "Report Analytics",
      url: "/dashboard",
      icon: <SiGoogleanalytics />,
    },
    {
      title: "Users",
      url: "#",
      icon: <FaUser />,
      submenu3: true,
      submenuItems: [
        { title: "Initiator" },
        { title: "Verifier" },
        { title: "Approval" },
      ],
    },
    {
      title: "Files",
      url: "/dashboard",
      spacing: true,
      icon: <AiFillFolderOpen />,
    },
    { title: "Setting", url: "/dashboard", icon: <AiOutlineSetting /> },
    { title: "Quicklinks", url: "/dashboard", icon: <FaLink /> },
    {
      title: "Logout",
      url: "/dashboard",
      icon: <RiLogoutBoxFill />,
      logoutSpacing: true,
    },
  ];

  const dropDownHandler = (value) => {
    if (value === "Transactions") {
      setSubmenuOpen1(!submenuOpen1);
    } else if (value === "Communications") {
      setSubmenuOpen2(!submenuOpen2);
    } else {
      setSubmenuOpen3(!submenuOpen3);
    }
  };

  return (
    <div
      className={`bg-dark-purple p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}>
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <IoIosColorFilter
          className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 duration-300 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl duration-500 ${
            !open && "scale-0"
          }`}>
          Cooperatives
        </h1>
      </div>
      <ul className="mt-6">
        {Menus.map((menu, index) => (
          <div key={index}>
            <Link
              href={menu.url}
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-6 cursor-pointer p-2 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ${
                menu.spacing
                  ? "mt-9"
                  : menu.logoutSpacing
                  ? "mt-[7rem]"
                  : "mt-3"
              }`}>
              <span className="text-xl block float-left">{menu.icon}</span>
              <span
                className={`text-base font-semibold flex-1 duration-200 ${
                  !open && "hidden"
                }`}>
                {menu.title}
              </span>
              {menu.submenu1 && open ? (
                <AiFillCaretRight
                  className={`${submenuOpen1 && "rotate-180"}`}
                  onClick={() => dropDownHandler(menu.title)}
                />
              ) : menu.submenu2 && open ? (
                <AiFillCaretRight
                  className={`${submenuOpen2 && "rotate-180"}`}
                  onClick={() => dropDownHandler(menu.title)}
                />
              ) : menu.submenu3 && open ? (
                <AiFillCaretRight
                  className={`${submenuOpen3 && "rotate-180"}`}
                  onClick={() => dropDownHandler(menu.title)}
                />
              ) : (
                ""
              )}
            </Link>
            {menu.submenu1 && submenuOpen1 && open ? (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <Link
                    href={submenuItem.url}
                    key={index}
                    className="text-gray-300 text-sm flex items-center cursor-pointer p-2 px-5 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ml-8 font-medium">
                    {submenuItem.title}
                  </Link>
                ))}
              </ul>
            ) : menu.submenu2 && submenuOpen2 && open ? (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-center cursor-pointer p-2 px-5 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ml-8 font-medium">
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            ) : menu.submenu3 && submenuOpen3 && open ? (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-center cursor-pointer p-2 px-5 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ml-8 font-medium">
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        ))}
      </ul>
      <div className="inline-flex items-center absolute bottom-0">
        <IoIosColorFilter
          className={`bg-white text-4xl rounded cursor-pointer block float-left mr-5 duration-300 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-500 ${
            !open && "scale-0"
          }`}>
          ALAT for Cooperatives
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
