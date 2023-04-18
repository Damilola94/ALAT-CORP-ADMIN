import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

import SessionControl from "../common/SessionControl";
import Loading from "../common/Loading";
import { SideBar } from "@/components";

const Layout = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [cookie] = useCookies();
  const { push } = useRouter();

  useEffect(() => {
    if (!cookie?.data?.token) push("/login");
  }, [cookie, push]);

  if (!cookie?.data?.token) {
    return <Loading />;
  }

  return (
    <div className="bg-secondary w-full h-full min-h-screen relative">
      <SessionControl path="/login" />
      <div className="flex relative  bg-[#FAFAFA] h-fit">
        <SideBar setOpenSideBar={setOpenSideBar} />
        <div className={`sticky w-screen ${!openSideBar ? "ml-72" : "ml-20"}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
