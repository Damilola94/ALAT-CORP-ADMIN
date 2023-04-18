import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ReactNotifications } from "react-notifications-component";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { SideBar } from "@/components";
import store from "@/redux/store";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
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

  const getLayout = Component.getLayout ?? ((page) => page);

  if (!pageLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <ReactNotifications />
        <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Hydrate>
    </QueryClientProvider>
  );
}
