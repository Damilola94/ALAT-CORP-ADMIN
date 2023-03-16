import { useState } from "react";
import { Provider } from "react-redux";
import "@/styles/globals.css";

import { SideBar } from "@/components";
import store from "@/redux/store";

export default function App({ Component, pageProps }) {
  const [openSideBar, setOpenSideBar] = useState(false);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Provider store={store}>
      <div className="flex relative  bg-[#FAFAFA] h-fit">
        <div className="fixed top-0 left-0 right-0 h-[100%] overflow-y-auto  overflow-x-hidden scrollbar">
          <SideBar setOpenSideBar={setOpenSideBar} />
        </div>
        <div className={`sticky w-screen ${!openSideBar ? "ml-72" : "ml-20"}`}>
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
