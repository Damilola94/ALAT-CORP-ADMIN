import { useState } from "react";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFileImageFill,
  BsChatSquareQuote,
} from "react-icons/bs";
import { AiFillFolderOpen, AiOutlineSetting } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import { FaUser, FaLink, FaWallet } from "react-icons/fa";
import { IoIosColorFilter } from "react-icons/io";

import Container from "../components/Container";
import Header from "../components/Header";

const App = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    {
      title: "Transactions",
      icon: <FaWallet />,
      submenu: true,
      submenuTitle: "Transactions",
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 5" },
      ],
    },
    { title: "Loan Management", spacing: true, icon: <BsFileImageFill /> },
    {
      title: "Communications",
      icon: <BsChatSquareQuote />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 5" },
      ],
    },
    { title: "Report Analytics", icon: <SiGoogleanalytics /> },
    {
      title: "Users",
      icon: <FaUser />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 5" },
      ],
    },
    { title: "Files", spacing: true, icon: <AiFillFolderOpen /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Quicklinks", icon: <FaLink /> },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen ${
          submenuOpen && "h-fit"
        } p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative `}>
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
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-6 cursor-pointer p-2 hover:bg-slate-50 transparent rounded-md ${
                  menu.spacing ? "mt-9" : "mt-3"
                }`}>
                <span className="text-xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardLine />}
                </span>
                <span
                  className={`text-base font-semibold flex-1 duration-200 ${
                    !open && "hidden"
                  }`}>
                  {menu.title}
                </span>
                {menu.submenu &&
                  menu.submenuTitle === "Transactions" &&
                  open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
              </li>
              {menu.submenu &&
                submenuOpen &&
                open &&
                menu.submenuTitle === "Transactions" && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-50 rounded-md">
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
            </>
          ))}
        </ul>
      </div>
      <div className="w-screen">
        <Header />
        <Container />
      </div>
    </div>
  );
};

export default App;
