import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { IoIosColorFilter } from "react-icons/io";

import LoanIcon from "public/icons/loan";
import TransactionIcon from "public/icons/transaction";
import CommunicationIcon from "public/icons/communication";
import ReportAnalyticsIcon from "public/icons/reportAnalytics";
import UserIcon from "public/icons/user";
import SettingIcon from "public/icons/settings";
import DashboardIcon from "public/icons/dashboard";
import LogoutIcon from "public/icons/logout";
import { logout } from "../../services/auth";

const SideBar = ({ setOpenSideBar }) => {
  const [open, setOpen] = useState(true);
  const { pathname } = useRouter();
  const [submenuOpen1, setSubmenuOpen1] = useState(false);
  const [submenuOpen2, setSubmenuOpen2] = useState(false);
  const [submenuOpen3, setSubmenuOpen3] = useState(false);

  const getActive = (currentLocation) => {
    if (pathname === currentLocation || pathname === `${currentLocation}`) {
      return "bg-white text-red-900";
    }
  };

  const Menus = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      url: "/dashboard",
    },
    {
      title: "Transactions",
      icon: <TransactionIcon />,
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
        {
          title: "Beneficiary",
          url: "/transaction/beneficiary",
        },
        {
          title: "Contribution",
          url: "/transaction/contribution",
        },
      ],
    },
    {
      title: "Loan Management",
      url: "#",
      spacing: true,
      icon: <LoanIcon />,
      submenu2: true,
      submenuTitle: "Loan Management",
      submenuItems: [
        {
          title: "Members Loan",
          url: "/loan-management/members-loan",
        },
        {
          title: "Cooperative Loan",
          url: "/loan-management/cooperative-loan",
        },
        {
          title: "Loan Configuration",
          url: "/loan-management/loan-configuration",
        },
      ],
    },
    {
      title: "Communication",
      url: "#",
      icon: <CommunicationIcon />,
      submenu3: true,
      submenuItems: [
        { title: "Chat", url: "/communication/chat" },
        { title: "Events", url: "/communication/events" },
        { title: "Announcement", url: "/communication/announcement" },
      ],
    },
    {
      title: "Report Analytics",
      url: "/report-analytics",
      icon: <ReportAnalyticsIcon />,
    },
    {
      title: "Users",
      url: "/users",
      icon: <UserIcon />,
    },
    { title: "Settings", url: "/settings", icon: <SettingIcon /> },
    // {
    //   title: "Logout",
    //   url: "#",
    //   icon: <LogoutIcon />,
    //   logoutSpacing: true,
    // },
  ];

  const dropDownHandler = (value) => {
    if (value === "Transactions") {
      setSubmenuOpen1(!submenuOpen1);
    } else if (value === "Loan Management") {
      setSubmenuOpen2(!submenuOpen2);
    } else if (value === "Communication") {
      setSubmenuOpen3(!submenuOpen3);
    }
  };

  const handleDrawer = () => {
    setOpen(!open);
    setOpenSideBar(open);
  };

  return (
    <div className="fixed top-0 left-0 right-0  h-screen overflow-y-auto  overflow-x-hidden scrollbar">
      <div
        className={`bg-dark-purple p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`z-50 text-white text-3xl rounded-full absolute left-[230px] top-9 cursor-pointer 
        hover:-translate-x-1 hover:scale-110 ${!open && "rotate-180"}`}
          onClick={() => handleDrawer()}
        />
        <div className="inline-flex">
          <IoIosColorFilter
            onClick={() => handleDrawer()}
            className={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 duration-300 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-500 ${
              !open && "scale-0"
            }`}
          >
            Cooperatives
          </h1>
        </div>
        <ul className="mt-6">
          {Menus.map((menu, index) => (
            <div key={index}>
              <Link
                href={menu.url}
                onClick={() => dropDownHandler(menu.title)}
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-6 cursor-pointer p-2 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ${
                  menu.spacing
                    ? "mt-9"
                    : menu.logoutSpacing
                    ? "my-[7rem]"
                    : "mt-3"
                } ${getActive(menu.url)}`}
              >
                <span className="text-xl block float-left">{menu.icon}</span>
                <span
                  className={`text-base font-semibold flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
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
                <ul className="">
                  {menu.submenuItems.map((submenuItem, index) => (
                    <Link
                      href={submenuItem.url}
                      key={index}
                      className={`text-gray-300 text-sm flex items-center cursor-pointer p-2 px-5 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ml-14 font-medium ${getActive(
                        submenuItem.url
                      )}`}
                    >
                      {submenuItem.title}
                    </Link>
                  ))}
                </ul>
              ) : menu.submenu2 && submenuOpen2 && open ? (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <Link
                      href={submenuItem.url}
                      key={index}
                      className={`text-gray-300 text-sm flex items-center cursor-pointer p-2 px-5 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ml-8 font-medium ${getActive(
                        submenuItem.url
                      )}`}
                    >
                      {submenuItem.title}
                    </Link>
                  ))}
                </ul>
              ) : menu.submenu3 && submenuOpen3 && open ? (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <Link
                      href={submenuItem.url}
                      key={index}
                      className={`text-gray-300 text-sm flex items-center cursor-pointer p-2 px-5 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ml-8 font-medium ${getActive(
                        submenuItem.url
                      )}`}
                    >
                      {submenuItem.title}
                    </Link>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ))}
        </ul>
        <div
          className={`text-gray-300 text-sm items-center gap-x-6 cursor-pointer p-2 rounded-md my-[5rem] flex`}
          type="button"
          onClick={() => logout()}
        >
          <span className="text-xl block float-left">
            <LogoutIcon />
          </span>
          <h1 className="text-base font-semibold flex-1 duration-200">
            Logout
          </h1>
        </div>
        <div className="inline-flex items-center absolute bottom-0">
          <IoIosColorFilter
            className={`bg-white text-4xl rounded cursor-pointer block float-left mr-5 duration-300 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-500 ${
              !open && "scale-0"
            }`}
          >
            ALAT for Cooperatives
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
