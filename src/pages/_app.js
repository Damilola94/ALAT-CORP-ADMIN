import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ReactNotifications } from "react-notifications-component";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { SideBar } from "@/components";
import store from "@/redux/store";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  if (!pageLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactNotifications />
        <Provider store={store}>
          <div className="flex relative  bg-[#FAFAFA] h-fit">
            <div className="fixed top-0 left-0 right-0 h-[100%] overflow-y-auto  overflow-x-hidden scrollbar">
              <SideBar setOpenSideBar={setOpenSideBar} />
            </div>
            <div
              className={`sticky w-screen h-[100%]overflow-y-hidden  ${!openSideBar ? "ml-72" : "ml-20"}`}
            >
              <Component {...pageProps} />
            </div>
          </div>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Hydrate>
    </QueryClientProvider>
  );
}
