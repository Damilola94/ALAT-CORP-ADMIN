import { useState } from "react";
import {
  BsArrowLeftShort,
  BsChatSquareQuote,
} from "react-icons/bs";
import { AiFillFolderOpen, AiOutlineSetting, AiFillCaretRight } from "react-icons/ai";
import { RiDashboardLine,RiLogoutBoxFill } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import { FaUser, FaLink, FaWallet , } from "react-icons/fa";
import { IoIosColorFilter } from "react-icons/io";

import {Container, Header} from "../components";


const App = () => {
  const [open, setOpen] = useState(true);
  const [test, setTest] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuTransaction, setSubmenuTransaction] = useState("");

  const Menus = [
    { 
      title: "Dashboard",
    icon: <RiDashboardLine />,
  },
    {
      title: "Transactions",
      icon: <FaWallet />,
      submenu: true,
      submenuTitle: "Transactions",
      submenuItems: [
        { title: "Transactions 1" },
        { title: "Transactions 2" },
        { title: "Transactions 3" },
      ],
    },
    { title: "Loan Management", spacing: true, icon: <FaWallet /> },
    {
      title: "Communications",
      icon: <BsChatSquareQuote />,
      submenu: true,
      submenuItems: [
        { title: "Communications 1" },
        { title: "Communications 2" },
        { title: "Communications 3" },
      ],
    },
    { title: "Report Analytics", icon: <SiGoogleanalytics /> },
    {
      title: "Users",
      icon: <FaUser />,
      submenu: true,
      submenuItems: [
        { title: "Users 1" },
        { title: "Users 2" },
        { title: "Users 3" },
      ],
    },
    { title: "Files", spacing: true, icon: <AiFillFolderOpen /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Quicklinks", icon: <FaLink /> },
    { title: "Logout", icon: <RiLogoutBoxFill />, logoutSpacing: true, },

  ];

  const dropDownHandler = (value) => {
    console.log(value)
    switch (value) {
      case value:"Transactions"
      setSubmenuOpen(!submenuOpen)
      // setSubmenuTransaction("Transactions")
        break;
      case value:"Communications"
        // setSubmenuOpen(!submenuOpen)
        break;
      case value:"Users"
        // setSubmenuOpen(!submenuOpen)
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex ">
      <div
        className={`bg-dark-purple p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative` }>
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
            <div>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-6 cursor-pointer p-2 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ${
                  menu.spacing ? "mt-9" : menu.logoutSpacing ? "mt-[7rem]": "mt-3"
                }`}>
                <span className="text-xl block float-left">
                  {menu.icon}
                </span>
                <span
                  className={`text-base font-semibold flex-1 duration-200 ${
                    !open && "hidden"
                  }`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                    <AiFillCaretRight
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => dropDownHandler(menu.title)}
                    />
                  )}
              </li>
              {menu.submenu &&
                submenuOpen &&
                open && 
               (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-center cursor-pointer p-2 px-5 hover:bg-gray-50 hover:opacity-25 hover:text-gray-900 rounded-md ml-8 font-medium">
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}
        </ul>
        <div className="inline-flex mt-14 items-center ">
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
      <div className="w-screen">
        <Header />
        <Container />
      </div>
    </div>
  );
};

export default App;
